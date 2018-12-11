module.exports = {
  simpleUniqueId,
  createOrderDrug
};

function simpleUniqueId() {
  return `${Math.random().toString().substring(2)}.${Date.now()}`;
}

function createOrderDrug(drugs, orderId, OrderDrug) {
  return drugs.map(item => new OrderDrug({order: orderId, drug: item._id, quantity: item.amountOfDrugs}).save());
}
