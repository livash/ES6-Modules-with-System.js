var BT = require('../binary_tree');

describe("Binary Tree", function() {
  it("should create a tree with a property root", function() {
    var tree = new BT.BT();
    expect(tree.root).toBeNull();
  });

  it("should be able to add values to the tree", function() {
    var tree = new BT.BT();
    tree.add(100);
    expect(tree.root.val).toBe(100);
  });

  it("should be able to add multiple values", function() {
    var tree = new BT.BT();
    tree.add(100);
    tree.add(103);
    tree.add(95);
    expect(tree.root.left.val).toBe(95);
    expect(tree.root.right.val).toBe(103);
  });

  it("should create a binary search tree", function() {
    var tree = new BT.BT();
    tree.add(100);
    tree.add(103);
    tree.add(95);
    var result = tree.isBST();
    expect(result).toBeTruthy();
  });
});