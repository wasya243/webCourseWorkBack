const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: mongooseTypes.String,
    required: true
  },
  lastName: {
    type: mongooseTypes.String,
    required: true
  },
  address: {
    type: mongooseTypes.String,
    required: true
  },
  email: {
    type: mongooseTypes.String,
    required: true,
    unique: true
  },
  password: {
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
  userSchema
};