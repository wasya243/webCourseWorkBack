const mongoose = require('mongoose');

const {drugSchema} = require('./schema');

const Drug = mongoose.model('Drug', drugSchema, 'drugs');

module.exports = {
  Drug
};
