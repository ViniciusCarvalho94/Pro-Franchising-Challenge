const JWT_CONFIG = {
  expiresIn: 3600,
  algorithm: 'HS256',
};

const { SECRET } = process.env;

module.exports = {
  JWT_CONFIG,
  SECRET,
};
