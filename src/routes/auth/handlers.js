const {crypt, token} = require('../../auth/index');
const {User} = require('../../db/models/user');
const {simpleUniqueId} = require('../../lib/helpers');


module.exports = {
  signIn,
  signOut
};

async function signIn(req, res, next) {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user || !await crypt.verifyPassword(password, user.password)) {

      return next({status: 401});
    }
    const userPayload = {id: user._id, sessionId: simpleUniqueId()};
    const accessToken = await token.sign(userPayload);
    const refreshToken = await token.sign(userPayload, '2d');
    await User.setSessionId(user._id, userPayload.sessionId);

    res.send({
      accessToken,
      refreshToken,
      userInfo: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber
      }
    });
  } catch (e) {
    next(e);
  }
}

async function signOut(req, res, next) {
  try {
    const {_id} = req.userData;
    await User.unsetSessionId(_id);
    res.end();
  } catch (e) {
    next(e);
  }
}
