const { getAllproductsModel } = require('../models');

module.exports = async () => {
  const allProducts = await getAllproductsModel();

  return allProducts;
};
