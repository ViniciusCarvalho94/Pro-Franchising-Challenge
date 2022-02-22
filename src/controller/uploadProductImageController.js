const { uploadProductImageService } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { rule } = req.user;
    const { name } = req.query;
    const { path } = req.file;
    // await uploadProductImageService(rule, name, path);

    return res.status(201).json({ message: 'Imagem inserida com sucesso' });
  } catch (error) {
    return next(error);
  }
};
