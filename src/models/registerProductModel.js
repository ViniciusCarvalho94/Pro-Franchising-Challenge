const connection = require('./connection');

module.exports = async (product) => {
  const connect = await connection();
  await connect.collection('products')
    .insertOne(product);
};
