const { getAllproductsService } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const allProducts = await getAllproductsService();

    return res.status(200).json({ allProducts });
  } catch (error) {
    return next(error);
  }
};
