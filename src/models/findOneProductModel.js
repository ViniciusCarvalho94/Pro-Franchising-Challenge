const connection = require('./connection');

module.exports = async (name) => {
  const connect = await connection();
  const product = await connect.collection('products')
    .findOne({ name });

  return product;
};
