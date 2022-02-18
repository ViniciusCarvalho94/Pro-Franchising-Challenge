const connection = require('./connection');

module.exports = async (username) => {
  const connect = await connection();
  const user = await connect.collection('users')
    .findOne({ username });

  return user;
};
