const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const {manufacturer} = require('../../../lib/validation/shared');

const drugSchema = new mongoose.Schema({
  category: {
    type: mongooseTypes.ObjectId,
    required: true,
    ref: 'Category'
  },
  manufacturer: {
    type: mongooseTypes.String,
    required: true,
    validate: [ manufacturer.validator, manufacturer.errorMessage ]
  },
  price: {
    type: mongooseTypes.Number,
    required: true,
    min: 0
  },
  logoUrl: {
    type: mongooseTypes.String,
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

module.exports = {
  drugSchema
};
