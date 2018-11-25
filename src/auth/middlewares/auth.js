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
    if (!user || user.sessionId !== encoded.sessionId) {
      user.sessionId !== encoded.sessionId
        ? next({status: 401, message: 'Session id is not the same'})
        : next({status: 401});

      return;
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