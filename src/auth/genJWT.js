const jwt = require('jsonwebtoken');
const { SECRET, JWT_CONFIG } = require('./configJWT');

module.exports = (data) => jwt.sign({ data }, SECRET, JWT_CONFIG);
