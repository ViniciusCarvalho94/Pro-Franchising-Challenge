const connection = require('./connection');

module.exports = async () => {
  const connect = await connection();
  const allProducts = await connect.collection('products')
    .find()
    .toArray();

  return allProducts;
};
