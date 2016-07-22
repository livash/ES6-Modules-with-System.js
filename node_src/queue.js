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
    this.last = this.first;
  } else {
    var temp = this.last;
    this.last = newNode;
    temp.next = newNode;
  }
}

// remove the first element in the queue
Queue.prototype.dequeue = function() {
  if (this.first === null) { return null; }
  var result;
  if (this.first === this.last) {
    result = this.first.val;
    this.first = null;
    this.last = null;
  } else {
    var temp = this.first;
    this.first = this.first.next;
    result = temp.val;
  }
  
  return result;
}

Queue.prototype.print = function() {
  var node = this.first;
  var result = "";
  while (node !== null) {
    result += node.val + " < ";
    node = node.next;
  }
  console.log(result);
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

// var q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q);
// q.print();
// console.log(q.dequeue());
// q.print();

module.exports = {
  Queue: Queue
}