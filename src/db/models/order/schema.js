const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  user: {
    type: mongooseTypes.ObjectId,
    required: true,
    ref: 'User'
  },
  // TODO: implement comment functionality later
  comment: {
    type: mongooseTypes.String
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

module.exports = {
  orderSchema
};
