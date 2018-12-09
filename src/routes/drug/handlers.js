const {Drug} = require('../../db/models/drug');

async function getDrugById(req, res, next) {
  try {
    const {id} = req.params;
    const drug = await Drug.findById(id);
    drug ? res.send(drug) : next();
  } catch (error) {
    next(error);
  }
}

async function createDrug(req, res, next) {
  try {
    const drugInfo = req.body;
    const createdDrug = await new Drug(drugInfo).save();
    res.send(createdDrug);
  } catch (error) {
    next(error);
  }
}

async function deleteDrug(req, res, next) {
  try {
    const {id} = req.params;
    const deletedDrug = await Drug.findByIdAndRemove(id);
    deletedDrug ? res.status(204).end() : next();
  } catch (error) {
    next(error);
  }
}

async function updateDrug(req, res, next) {
  try {
    const {id} = req.params;
    const drugInfo = req.body;
    const updatedDrug = await Drug.findByIdAndUpdate(id, drugInfo, {
      new: true
    });
    updatedDrug ? res.send(updatedDrug) : next();
  } catch (error) {
    next(error);
  }
}

async function getDrugs(req, res, next) {
  try {
    const listOfDrugs = await Drug.find({});
    res.send(listOfDrugs);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDrugs,
  getDrugById,
  createDrug,
  deleteDrug,
  updateDrug
};
