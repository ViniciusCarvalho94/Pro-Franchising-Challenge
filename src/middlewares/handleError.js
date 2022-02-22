module.exports = (error, _req, res, _next) => {
  if (error.message === 'format image error') {
    return res.status(406).json({ message: 'É aceita apenas uma imagem em um dos formatos: jpg ou png' });
  }

  if (error.statusCode) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }

  return res.status(500).json({ message: 'Internal Error' });
};
