const {Category} = require('../../db/models/category');
const {Drug} = require('../../db/models/drug');

async function getCategoryById(req, res, next) {
  try {
    const {id} = req.params;
    const category = await Category.findById(id);
    category ? res.send(category) : next();
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res, next) {
  try {
    const categoryInfo = req.body;
    const createdCategory = await new Category(categoryInfo).save();
    res.send(createdCategory);
  } catch (error) {
    next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const {id} = req.params;
    const deletedCategory = await Category.findByIdAndRemove(id);
    deletedCategory ? res.status(204).end() : next();
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    const {id} = req.params;
    const categoryInfo = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, categoryInfo, {
      new: true
    });
    updatedCategory ? res.send(updatedCategory) : next();
  } catch (error) {
    next(error);
  }
}

async function getCategories(req, res, next) {
  try {
    const listOfCategories = await Category.find({});
    res.send(listOfCategories);
  } catch (error) {
    next(error);
  }
}

async function getDrugsByCategoryId(req, res, next) {
  try {
    const {id} = req.params;
    const listOfDrugs = await Drug.find({category: id});
    res.send(listOfDrugs);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
  createCategory,
  getDrugsByCategoryId
};
