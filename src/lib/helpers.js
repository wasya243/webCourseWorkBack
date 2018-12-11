module.exports = {
  simpleUniqueId,
  createOrderDrug,
  processOrderReport
};

function simpleUniqueId() {
  return `${Math.random().toString().substring(2)}.${Date.now()}`;
}

function createOrderDrug(drugs, orderId, OrderDrug) {
  return drugs.map(item => new OrderDrug({order: orderId, drug: item._id, quantity: item.amountOfDrugs}).save());
}

// TODO: rework this algorithm 'cause I don't have time to optimize it now
function processOrderReport(report) {
  return report.map(item => {
    let response = Object.assign({}, {createdAt: item.createdAt, totalPrice: item.totalPrice, _id: item._id});
    const drugs = item.drugs.map((drug) => {
      return Object.assign({}, {
        drug,
        quantity: item.orderedDrugs.filter(orderedDrug => orderedDrug.drug.toString() === drug._id.toString())[ 0 ].quantity
      });
    });
    response.items = drugs;
    return response;
  });
}
