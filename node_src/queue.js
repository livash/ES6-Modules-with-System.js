function QNode(next, val) {
  this.next = null;
  this.val = val;
}

function Queue() {
  this.first = null;
  this.last = null;
}

// add element as the last element to a queue
Queue.prototype.enqueu = function(val) {
  
}

// remove the first element in the queue
Queue.prototype.dequeue = function() {
  
}

Queue.prototype.isSorted = function() {
  var node = this.first;
  while (node !== null) {
    if (node.next !== null && node.val >= node.next.val) {
      return false;
    }
    node = node.next;
  }

  return true;
}

module.exports = {
  Queue: Queue
}