const jwt = require('jsonwebtoken');

const { findUserModel } = require('../models');
const { objError } = require('../functions/objError');
const { SECRET } = require('../auth');

function verifyNotEmptyAuthorization(authorization) {
  if (!authorization) throw objError(401, 'Está faltando o token de autorização');
}

async function validateJWT(authorization) {
  const { username } = jwt.verify(authorization, SECRET);

  const findUser = await findUserModel(username);
  if (!findUser) throw objError(401, 'Token inválido');

  return findUser;
}

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    verifyNotEmptyAuthorization(authorization);
    const findUser = await validateJWT(authorization);

    req.findUser = findUser;

    return next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
