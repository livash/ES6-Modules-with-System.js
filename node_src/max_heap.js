var MaxHeap = function() {
  this.array = [];
};

MaxHeap.prototype.getMax = function() {
  return this.array[0];
};

module.exports = {
  MaxHeap: MaxHeap
}