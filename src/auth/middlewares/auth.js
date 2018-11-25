const token = require('../token');
const {User} = require('../../db/models/user');

module.exports = async function authMiddleware(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return next({status: 401});
  }
  const [, accessToken] = /Bearer (.+)/.exec(authHeader) || [];
  try {
    const encoded = await token.verify(accessToken);
    const user = await User.findById(encoded.id);
    if (!user) {
      return next({status: 401});
    }
    req.userData = {_id: user._id};
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return next({...error, status: 401});
    }
    next(error);
  }
};