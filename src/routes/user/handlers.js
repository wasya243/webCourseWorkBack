const {User} = require('../../db/models/user');
const {Order} = require('../../db/models/order');
const {crypt} = require('../../auth/index');
const {processOrderReport} = require('../../lib/helpers');

async function getUserById(req, res, next) {
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    user ? res.send(user) : next();
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const userInfo = req.body;
    userInfo.password = await crypt.encryptPassword(userInfo.password);
    const createdUser = await new User(userInfo).save();
    res.send(createdUser);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const {id} = req.params;
    const deletedUser = await User.findByIdAndRemove(id);
    deletedUser ? res.status(204).end() : next();
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const {id} = req.params;
    const userInfo = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, userInfo, {
      new: true,
      projection: User.defaultProjection
    });
    updatedUser ? res.send(updatedUser) : next();
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const listOfUsers = await User.find({}, User.defaultProjection);
    res.send(listOfUsers);
  } catch (error) {
    next(error);
  }
}

async function getOrdersByUser(req, res, next) {
  try {
    // get data to work with
    const {id} = req.params;
    // aggregate report
    const report = await Order.getOrdersReportByUser(id);
    // preprocess response before sending
    const processedResponse = processOrderReport(report);
    // send response
    res.send(processedResponse);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  getOrdersByUser
};
