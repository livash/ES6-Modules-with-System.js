var Queue = require('./queue');

/*
  Binary Tree node.
*/
function BTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Binary Tree
function BT() { 
  this.root = null;
}

/*
  @param val - integer
  This method adds a notde with a "val" to a tree
*/
BT.prototype.add = function(val) {
  if (this.root === null) {
    this.root = new BTNode(val);
  } else {
    this.addNode(this.root, val);
  }
}

/*
  @param target - BTNode object
  @param val - integer to be added to a tree as a new node
  This method adds a new node with a value 'val' to a 
  BST with a root at the "target" node
*/
BT.prototype.addNode = function(target, val) {
  if (target.val <= val) {
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
  This method cheks whether a tree is a Binary Search Tree
  @result - return a boolean. True if the binary tree is a binary search tree
*/
BT.prototype.isBST = function() {
  // create a queue of "in-order" traversal of the tree
  var q = new Queue.Queue();
  var inOrder = function(node) {
    if (node.left !== null) { inOrder(node.left); }
    q.enqueue(node.val);
    if (node.right !== null) { inOrder(node.right); }
  }

  // assemble a queue for the in-order traversal of a tree
  inOrder(this.root);

  return q.isSorted();
}

BT.prototype.toString = function() {
  var q = new Queue.Queue();
  var inOrder = function(node) {
    if (node.left !== null) { inOrder(node.left); }
    q.enqueue(node.val);
    if (node.right !== null) { inOrder(node.right); }
  }

  // assemble a queue for the in-order traversal of a tree
  inOrder(this.root);
  return q.toString();
}

// var tree = new BT();
// tree.add(100);
// tree.add(98);
// tree.add(102);
// console.log(tree);

module.exports = {
    BT:BT
}