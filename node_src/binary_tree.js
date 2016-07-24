var Queue = require('./queue');

function BTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Binary Tree
function BT() { 
  this.root = null;
}

BT.prototype.add = function(val) {
  if (this.root === null) {
    this.root = new BTNode(val);
  } else {
    this.addNode(this.root, val);
  }
}

BT.prototype.addNode = function(target, val) {
  if (target.val > val) {
    // insert on the right
    if (target.right === null) {
      var newNode = new BTNode(val);
      target.right = newNode;
    } else {
      this.addNode(target.right, val);
    }
  } else {
    if (target.left === null) {
      var newNode = new BTNode(val);
      target.left = newNode;
    } else {
      this.addNode(target.left, val);
    }
  }
}
/*
   @result - return a boolean. True if the binary tree is a binary search tree
*/
BT.prototype.isBST = function() {
  // create a queue of "in-order" traversal of the tree
  var q = new Queue.Queue();
  var inOrder = function(node) {
    if (node.left !== null) { inOrder(node.left); }
    q.enqueue(node);
    if (node.right !== null) { inOrder(node.right); }
  }

  // assemble a queue for the in-order traversal of a tree
  inOrder(this.root);

  return q.isSorted();
}

// var tree = new BT();
// tree.add(100);
// tree.add(98);
// tree.add(102);
// console.log(tree);

module.exports = {
    BT:BT
}