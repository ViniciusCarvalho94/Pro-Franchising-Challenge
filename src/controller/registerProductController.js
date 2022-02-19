const { registerProductService } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { rule } = req.user;
    const product = req.body;
    await registerProductService(rule, product);

    return res.status(201).json({ message: 'Produto criado com sucesso' });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};
