// this schema is for table Order MtM Product
const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const orderDrugSchema = new mongoose.Schema({
  order: {
    type: mongooseTypes.ObjectId,
    required: true,
    ref: 'Order'
  },
  drug: {
    type: mongooseTypes.ObjectId,
    required: true,
    ref: 'Drug'
  },
  quantity: {
    type: mongooseTypes.Number,
    required: true
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

orderDrugSchema.index({order: 1, drug: 1}, {unique: true});

module.exports = {
  orderDrugSchema
};
