var Queue = require('./queue');

/*
  Binary Tree node.
*/
function BSTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Binary Tree
function BST() {
  this.root = null;
}

/*
  @param val - integer
  This method adds a notde with a "val" to a tree
*/
BST.prototype.add = function(val) {
  if (this.root === null) {
    this.root = new BSTNode(val);
  } else {
    this.addNode(this.root, val);
  }
}

/*
  @param target - BSTNode object
  @param val - integer to be added to a tree as a new node
  This method adds a new node with a value 'val' to a 
  BST with a root at the "target" node
*/
BST.prototype.addNode = function(target, val) {
  if (target.val < val) {
    // insert on the right
    if (target.right === null) {
      var newNode = new BSTNode(val);
      target.right = newNode;
    } else {
      this.addNode(target.right, val);
    }
  } else {
    if (target.left === null) {
      var newNode = new BSTNode(val);
      target.left = newNode;
    } else {
      this.addNode(target.left, val);
    }
  }
}

/*
  Search for a value in a Binary Search Tree
  @param val - interger value for which we are searching the tree
  @result node - BSTNode object that has key value of 'val'
*/
BST.prototype.search = function(val) {
  var result = this.searchAt(this.root, val);
  return result;
}

BST.prototype.searchAt = function(node, val) {
  if (node === null) return null;
  if (node.val === val) {
    return node;
  }
  if (node.val > val) {
    return this.searchAt(node.left, val);
  } else {
    return this.searchAt(node.right, val);
  }
}

/*
  This method cheks whether a tree is a Binary Search Tree
  @result - return a boolean. True if the binary tree is a binary search tree
*/
BST.prototype.isBST = function() {
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

BST.prototype.toString = function() {
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

// var tree = new BST();
// tree.add(100);
// tree.add(98);
// tree.add(102);
// console.log(tree);

module.exports = {
    BST:BST
}