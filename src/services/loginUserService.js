require('dotenv').config();

const { compare } = require('bcrypt');

const { findUserModel } = require('../models');
const { loginUserSchema } = require('../schemas');
const { objError } = require('../functions');
const { genJWT } = require('../auth');

const STATUS_400 = 400;
const ERROR_DESCRIPTION = 'Usuário ou senha inválidos';

function validateSchema(username, password) {
  const { error } = loginUserSchema.validate({ username, password });
  if (error) throw objError(STATUS_400, ERROR_DESCRIPTION);
}

async function validatePassword(password, matchPassword) {
  const passwordConfirmed = await compare(password, matchPassword);
  if (!passwordConfirmed) throw objError(STATUS_400, ERROR_DESCRIPTION);

  return passwordConfirmed;
}

async function validateLogin(username, password) {
  const findUser = await findUserModel(username);
  if (!findUser) throw objError(STATUS_400, ERROR_DESCRIPTION);

  const { password: matchPassword } = findUser;
  await validatePassword(password, matchPassword);
}

module.exports = async ({ username, password }) => {
  await validateSchema(username, password);
  await validateLogin(username, password);

  const token = genJWT(username);

  return token;
};
