require('dotenv').config();

const { hash } = require('bcrypt');

const connection = require('./models/connection');

const { PASSWORD_ADMIN, PASSWORD_USER } = process.env;

async function encriptPassword() {
  const encriptedAdmin = await hash(PASSWORD_ADMIN, 8);
  const encriptedUser = await hash(PASSWORD_USER, 8);

  return [
    {
      rule: 'admin',
      username: '4dm1n',
      password: encriptedAdmin,
    },
    {
      rule: 'user',
      username: 'User',
      password: encriptedUser,
    },
  ];
}

const insertUsers = async () => {
  const encripedUsers = await encriptPassword();

  const instanceDb = await connection();
  await instanceDb.collection('users')
    .insertMany(encripedUsers);

  console.log('Database ready');
  process.exit();
};

insertUsers();
