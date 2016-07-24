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
});