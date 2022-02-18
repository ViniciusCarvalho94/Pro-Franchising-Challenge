const genJWT = require('./genJWT');
const { SECRET } = require('./configJWT');

module.exports = {
  genJWT,
  SECRET,
};
