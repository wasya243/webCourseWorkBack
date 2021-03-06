const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const staticMethods = require('./static-methods');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongooseTypes.ObjectId,
    required: true,
    ref: 'User'
  },
  // TODO: implement comment functionality later
  comment: {
    type: mongooseTypes.String,
    default: 'Default comment'
  },
  createdAt: {
    type: mongooseTypes.Date,
    default: Date.now()
  },
  updatedAt: {
    type: mongooseTypes.Date,
    default: Date.now()
  }
});

Object.assign(orderSchema.statics, staticMethods);

module.exports = {
  orderSchema
};
