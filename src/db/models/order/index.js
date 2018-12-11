const mongoose = require('mongoose');

const {orderSchema} = require('./schema');

const Order = mongoose.model('Order', orderSchema, 'orders');

module.exports = {
  Order
};
