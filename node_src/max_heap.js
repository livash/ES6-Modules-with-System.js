var MaxHeap = function() {
  this.array = [];
};

MaxHeap.prototype.getMax = function() {
  return this.array[0];
};

MaxHeap.prototype.add = function(val) {
  if (val === undefined || typeof val !== 'number') {
    throw "Invalid data for the Max Heap";
  }
  this.array.push(val);
  this.bubbleUp(this.array.length - 1, val);

  return this;
};

MaxHeap.prototype.bubbleUp = function(childIndex) {
  if (childIndex < 0) return;
  var parentIndex = this.getParentIndex(childIndex),
      childVal = this.getValue(childIndex),
      parentVal = this.getValue(parentIndex);

  if(this.shouldSwap(childVal, parentVal)) {
    this.swap(childIndex, parentIndex);
    this.bubbleUp(parentIndex);
  }
};

MaxHeap.prototype.shouldSwap = function(childVal, parentVal) {
  return childVal > parentVal;
};

MaxHeap.prototype.getParentIndex = function(childIndex) {
  return Math.floor(childIndex / 2);
};

MaxHeap.prototype.getValue = function(index) { // index is a one-based index
  return this.array[index - 1];
};

MaxHeap.prototype.swap = function(i, j) { // one-based indexes "i" and "j"
  var temp = this.array[i - 1];
  this.array[i - 1] = this.array[j - 1];
  this.array[j - 1] = temp;
};

module.exports = {
  MaxHeap: MaxHeap
}