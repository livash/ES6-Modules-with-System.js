function QNode(next, val) {
  this.next = null;
  this.val = val;
}

function Queue() {
  this.first = null;
  this.last = null;
}

// add element as the last element to a queue
Queue.prototype.enqueue = function(val) {
  var newNode = new QNode(null, val);
  if (this.first === null) {
    this.first = newNode;
    this.first = this.last;
  } else {
    var temp = this.last;
    this.last = newNode;
    temp.next = newNode;
  }
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