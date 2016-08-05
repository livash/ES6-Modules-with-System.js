var BST = require('../binary_search_tree');

describe("Binary Tree", function() {
  it("should create a tree with a property root", function() {
    var tree = new BST.BST();
    expect(tree.root).toBeNull();
  });

  it("should be able to add values to the tree", function() {
    var tree = new BST.BST();
    tree.add(100);
    expect(tree.root.val).toBe(100);
  });

  it("should be able to add multiple values", function() {
    var tree = new BST.BST();
    tree.add(100);
    tree.add(103);
    tree.add(95);
    expect(tree.root.left.val).toBe(95);
    expect(tree.root.right.val).toBe(103);
  });

  it("should be a Binary Search Tree, with nodes which are larger than root on the right and nodes which are equal or less than root on the lft", function() {
    var tree = new BST.BST();
    tree.add(100);
    tree.add(100);
    tree.add(105);
    expect(tree.root.val).toBe(100);
    expect(tree.root.left.val).toBe(100);
    expect(tree.root.right.val).toBe(105);
  });

  it("should create a binary search tree", function() {
    var tree = new BST.BST();
    tree.add(100);
    tree.add(103);
    tree.add(95);
    var result = tree.isBST();
    expect(result).toBeTruthy();
  });

  it("should have a search and searchAt methods", function() {
    var tree = new BST.BST();
    expect(typeof tree.search).toBe('function');
    expect(typeof tree.searchAt).toBe('function');
  });

  it("should search a tree for a node with value and return a node object if it's present in a tree", function() {
    var tree = new BST.BST();
    tree.add(100);
    tree.add(200);
    tree.add(99);
    tree.add(201);
    tree.add(2003);
    var result = tree.search(201);
    expect(result).toBeTruthy();
  });

  it("should search a tree for a value and if not found it returns null", function() {
    var tree = new BST.BST();
    tree.add(100);
    tree.add(200);
    tree.add(99);
    tree.add(201);
    tree.add(2003);
    var result = tree.search(1000);
    expect(result).toBeNull();
  });

  it("should have a toString method", function() {
    var tree = new BST.BST();
    expect(typeof tree.toString).toBe('function');
  });

  it("should return correct toString() result", function() {
    var tree = new BST.BST();
    tree.add(100);
    tree.add(103);
    tree.add(95);
    var result = tree.toString();
    expect(result).toBe("95 < 100 < 103 < ");
  });

  describe("BST.min method", function() {
    it("should have a method to find a node with the smallest value in a tree", function() {
      var tree = new BST.BST();
      expect(typeof tree.min).toBe('function');
    });

    it("should return null if the tree has no nodes", function() {
      var tree = new BST.BST();
      expect(tree.max()).toBeNull();
    });

    it("should return minimum element in a BST", function() {
      var tree = new BST.BST();
      tree.add(100)
          .add(200)
          .add(99)
          .add(10)
          .add(1);
      var result = tree.min();
      expect(result.val).toBe(1);
    });
  });

  describe("BST.max method", function() {
    it("should be a function", function() {
      var tree = new BST.BST();
      expect(typeof tree.max).toBe('function');
    });

    it("should return null if the tree has no nodes", function() {
      var tree = new BST.BST();
      expect(tree.max()).toBeNull();
    });

    it("should return the node with the largest value in a BST", function() {
      var tree = new BST.BST();
      tree.add(100)
          .add(200)
          .add(99)
          .add(10)
          .add(1);
      var result = tree.max();
      expect(result.val).toBe(200);
    });
  });

  describe("BST.deleteMin and BST.deleteMax", function() {
    ["deleteMin", "deleteMax"].forEach(function(method) {
      it("should be a funciton", function() {
        var tree = new BST.BST();
        expect(typeof tree[method]).toBe('function');
      });

      it("should delete the smallest number in a tree", function() {
        // Arrange
        var tree = new BST.BST();
        tree.add(100)
            .add(200)
            .add(99)
            .add(88)
            .add(1);
        var beforeDelete = tree.toString();

        // Act
        tree[method]();
        var afterDelete = tree.toString();

        //Assert
        expect(beforeDelete !== afterDelete).toBeTruthy();

      });
    });
  });

  describe("BST.traverseInOrder", function() {
    var tree;

    beforeEach(function() {
      tree = new BST.BST();
      tree.add(10).add(20).add(5).add(30).add(4).add(6).add(1);
    });

    it("should return an object", function() {
      var result = tree.traverseInOrder();
      expect(typeof result).toBe('object');
    });

    it("should traverse the tree in order", function() {
      var result = tree.traverseInOrder();
      expect(result.toString()).toBe("1 < 4 < 5 < 6 < 10 < 20 < 30 < ");
    });
  });

  describe("BST.traversePreOrder", function() {
    var tree;

    beforeEach(function() {
      tree = new BST.BST();
      tree.add(10).add(20).add(5).add(30).add(4).add(6).add(1);
    });

    it("should return an object", function() {
      var result = tree.traversePreOrder();
      expect(typeof result).toBe('object');
    });

    it("should traverse the tree in order", function() {
      var result = tree.traversePreOrder();
      expect(result.toString()).toBe("10 < 5 < 4 < 1 < 6 < 20 < 30 < ");
    });
  });
});