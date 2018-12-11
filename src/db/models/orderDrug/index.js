const mongoose = require('mongoose');

const {orderDrugSchema} = require('./schema');

const OrderDrug = mongoose.model('OrderDrug', orderDrugSchema, 'order-drugs');

module.exports = {
  OrderDrug
};
