const crypt = require('./crypt');
const token = require('./token');
const authMiddleWare = require('./middlewares/auth');

module.exports = {
  crypt,
  token,
  authMiddleWare,
};
