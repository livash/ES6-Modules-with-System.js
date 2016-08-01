'use strict';

var MaxHeap = function() {
  this.array = [];
};

//@return the Max number in the heap
MaxHeap.prototype.getMax = function() {
  return this.array[0];
};

/*
  mathod adds numbers to Max Heap
  @param val - number to be kept in the heap
  @return - heap object
*/
MaxHeap.prototype.add = function(val) {
  if (typeof val !== 'number') {
    throw new Error("Invalid data for the Max Heap");
  }
  this.array.push(val);
  this.bubbleUp(this.array.length, val);

  return this;
};

MaxHeap.prototype.bubbleUp = function(childIndex) {
  if (typeof childIndex !== 'number' || childIndex < 0) {
    throw new Error("Invalid input value");
  };
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
  var first = this.array.shift(),
      last = this.array.pop();

  this.array.unshift(last); // add last item to the front of the array
  this.bubbleDown(1); // start bubbleDown process starting with the first element in the array

  return first;
}

MaxHeap.prototype.bubbleDown = function(parentIndex) { // one-based index
  var parentVal = this.array[parentIndex - 1],
      leftChildIndex = this.getLeftChildIndex(parentIndex),
      rightChildIndex = this.getRightChildIndex(parentIndex),
      leftChildVal = this.getValue(leftChildIndex),
      rightChildVal = this.getValue(rightChildIndex);

  if (parentVal < rightChildVal && parentVal < leftChildVal) {
    if (rightChildVal > leftChildVal) {
      this.swap(parentIndex, rightChildIndex);
    } else {
      this.swap(parentIndex, leftChildIndex);
    }
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