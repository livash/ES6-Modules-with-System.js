/*
  Tree related methods for DFS and BFS
*/

var TreeNode = function(value, parent) {
  this.value = value;
  this.adjecent = [];
  if (parent) {
    parent.adjecent.push(this);
  }
}

var Tree = function(numLeafs) {
  this.root = null;
  this.numLeafs = numLeafs || 2;
}

/*
  DFS - Deapth First Search
  @param node - node of a tree, it should have node.adjecent property
  @param visitFunction - a function to be run to visit the node;
  @result - node that has the 'value' that is being searched
*/
var DFS = function(node, visitFunction) {
  if (node == null) return;

  visitFunction(node);
  node.visited = true;
  for (var i; i < node.adjecent.length; i++) {
    if (visitFunction(node.adjecent[i])) return node.adjecent[i];
    DFS(node.adjecent);
  }
}

module.exports = {
  Tree: Tree,
  TreeNode: TreeNode
}