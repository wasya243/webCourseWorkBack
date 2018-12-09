const mongoose = require('mongoose');

const {categorySchema} = require('./schema');

const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = {
  Category
};
