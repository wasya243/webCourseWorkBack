const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const staticMethods = require('./static-methods');
const {firstName, lastName, address, email, password, phoneNumber} = require('../../../lib/validation/shared');

const userSchema = new mongoose.Schema({
  firstName: {
    type: mongooseTypes.String,
    required: true,
    validate: [firstName.validator, firstName.errorMessage]
  },
  lastName: {
    type: mongooseTypes.String,
    required: true,
    validate: [lastName.validator, lastName.errorMessage]
  },
  address: {
    type: mongooseTypes.String,
    required: true,
    validate: [address.validator, lastName.errorMessage]
  },
  email: {
    type: mongooseTypes.String,
    required: true,
    unique: true,
    match: [email.regex, email.errorMessage]
  },
  phoneNumber: {
    type: mongooseTypes.String,
    required: true,
    match: [phoneNumber.regex, phoneNumber.errorMessage]
  },
  password: {
    type: mongooseTypes.String,
    required: true,
    minLength: password.minLength,
    maxLength: password.maxLength
  },
  sessionId: mongooseTypes.String,
  createdAt: {
    type: mongooseTypes.Date,
    default: Date.now()
  },
  updatedAt: {
    type: mongooseTypes.Date,
    default: Date.now()
  }
});

Object.assign(userSchema.statics, staticMethods);

module.exports = {
  userSchema
};