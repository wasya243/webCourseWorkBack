const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const {categoryName} = require('../../../lib/validation/shared');

const categorySchema = new mongoose.Schema({
  name: {
    type: mongooseTypes.ObjectId,
    required: true,
    unique: true,
    validate: [ categoryName.validator, categoryName.errorMessage ]
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
  categorySchema
};
