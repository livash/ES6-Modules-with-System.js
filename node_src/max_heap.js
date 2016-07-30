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
  this.bubbleUp(this.array.length, val);

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

MaxHeap.prototype.removeMax = function() {
  var first = this.array.shift();
      last = this.array.pop();
  this.array.unshift(last);
  this.bubbleDown(1);

  return first;
}

MaxHeap.prototype.bubbleDown = function(parentIndex) { // one-based index
  var parentVal = this.array[parentIndex - 1],
      leftChildIndex = this.getLeftChildIndex(parentIndex),
      rightChildIndex = this.getRightChildIndex(parentIndex),
      leftChildVal = this.getValue(leftChildIndex),
      rightChildVal = this.getValue(rightChildIndex);

  if (parentVal < rightChildVal && parentVal < leftChildVal) {
    // TODO finish this
  }

}

MaxHeap.prototype.getLeftChildIndex = function(position) {
  return position * 2;
}

MaxHeap.prototype.getRightChildIndex = function(position) {
  return position * 2 + 1;
}

MaxHeap.prototype.toString = function() {
  return this.array.toString();
}

MaxHeap.prototype.size = function() {
  return this.array.length;
}

module.exports = {
  MaxHeap: MaxHeap
}