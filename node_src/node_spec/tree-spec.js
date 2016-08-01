var tree = require('../tree');

describe('Tree with n-ary number of leafs', function() {
  it('should create a binary tree if no arguments are passed at construction', function() {
    var t = new tree.Tree();
    expect(t.numLeafs).toBe(2);
    expect(t.root).toBeNull();
  });
});

describe('TreeNode class for an n-ary tree', function() {
  it('should create a tree node with value and adjecent properties', function() {
    var tn = new tree.TreeNode('foo');
    expect(tn.value).toBe('foo');
    expect(tn.adjecent.length).toBe(0);
  });
});