const {Order} = require('../../db/models/order');
const {OrderDrug} = require('../../db/models/order-drug');
const {createOrderDrug} = require('../../lib/helpers');

// TODO: rework to transactions, 'cause we create several entities at a one time
// TODO: but I don't have time to set up replica set now

async function createOrder(req, res, next) {
  try {
    // get data to work with
    const {_id: userId} = req.userData;
    const {drugs} = req.body;
    // create order entry
    const order = await new Order({user: userId}).save();
    // create order drug entries
    const listOfOrderDrugs = await Promise.all(createOrderDrug(drugs, order._id.toString(), OrderDrug));
    // assemble response object
    const response = {
      order,
      listOfOrderDrugs
    };
    // send response
    res.send(response);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createOrder
};
