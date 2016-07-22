var Queue = require('./queue');

function BTNode(key, val) {
  this.key = key;
  this.val = val;
  this.left = null;
  this.right = null;
}

// Binary Tree
function BT() { 
  this.root = null;
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
