const {Types: {ObjectId}} = require('mongoose');

module.exports = {
  getOrdersReportByUser
};

function getOrdersReportByUser(userId) {

  return this.aggregate([
    {
      $match: {
        user: ObjectId(userId)
      }
    },
    {
      $lookup: {
        from: 'order-drugs',
        localField: '_id',
        foreignField: 'order',
        as: 'orderDrugs'
      }
    },
    {
      $unwind: {
        path: '$orderDrugs'
      }
    },
    {
      $lookup: {
        from: 'drugs',
        localField: 'orderDrugs.drug',
        foreignField: '_id',
        as: 'drug'
      }
    },
    {
      $unwind: {
        path: '$drug'
      }
    },
    {
      $group: {
        _id: '$_id',
        totalPrice: {$sum: {$multiply: [ '$orderDrugs.quantity', '$drug.price' ]}},
        orderedDrugs: {$push: '$orderDrugs'},
        createdAt: {$first: '$createdAt'},
        drugs: {$push: '$drug'}
      }
    }
  ]);
}
