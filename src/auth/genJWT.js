const jwt = require('jsonwebtoken');
const { SECRET, JWT_CONFIG } = require('./configJWT');

module.exports = (username) => jwt.sign({ username }, SECRET, JWT_CONFIG);
