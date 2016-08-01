var MH = require('../max_heap');

describe("Max Heap", function() {
  it("should create an empty heap on construction", function() {
    var heap = new MH.MaxHeap();
    expect(heap.array.length).toBe(0);
  });

  it("should create a heap with a inner property called 'array'", function() {
    var heap = new MH.MaxHeap();
    expect(heap.hasOwnProperty('array')).toBeTruthy();
  });

  it("should be able to add value", function() {
    var heap = new MH.MaxHeap();
    heap.add(100)
        .add(99)
        .add(88);
    expect(heap.array.length === 3).toBeTruthy();
  });

  it("should throw an error when trying to add a non-numeric input", function() {
    var heap = new MH.MaxHeap();
    expect(function() { heap.add('foo'); }).toThrow("Invalid data for the Max Heap");
    expect(function() { heap.add(); }).toThrow("Invalid data for the Max Heap");
  });

  it('should return the correct value for the max number inserted into the heap', function() {
    var heap = new MH.MaxHeap();
    heap.add(10)
        .add(20)
        .add(30);
    expect(heap.getMax()).toBe(30);
  });

  it("should be able to remove the maxNumber off the heap", function() {
    var heap = new MH.MaxHeap();
    heap.add(10)
        .add(20)
        .add(30)
        .add(40);
    var beforeRemoveMax = heap.getMax();
    var maxNumberRemoved = heap.removeMax();
    var afterRemoveMax = heap.getMax();
    expect(maxNumberRemoved).toBe(40);
    expect(beforeRemoveMax).toBe(40);
    expect(afterRemoveMax).toBe(30);
    expect(heap.toString()).toBe("30,10,20");
  });

  it("should have a bubbleDown method", function() {
    var heap = new MH.MaxHeap();
    expect(typeof heap.bubbleDown).toBe('function');
  });

  it("should throw an error when bubbleUp method is initialized with a non-numeric input", function() {
    var heap = new MH.MaxHeap();
    expect(function() { heap.bubbleUp('foo'); }).toThrow('Invalid input value');
    expect(function() { heap.bubbleUp(); }).toThrow('Invalid input value');
  });

  it("should have a bubbleUp method", function() {
    var heap = new MH.MaxHeap();
    expect(typeof heap.bubbleUp).toBe('function');
  });

  it('should return correct toString representation of a MaxHeap object', function() {
    var heap = new MH.MaxHeap();
    var arr = [10,20,30,40];
    arr.forEach(function(item) {
      heap.add(item);
    });
    expect(heap.toString()).toBe(arr.reverse().toString());
  });

  it("should have a method to return the parentIndex of an element based on it's position in the array", function() {
    var heap = new MH.MaxHeap();
    expect(heap.getParentIndex(3)).toBe(1);
    expect(heap.getParentIndex(21)).toBe(10);
  });

  it("should return the size of the stack", function() {
    var heap = new MH.MaxHeap();
    heap.add(10)
        .add(20)
        .add(30);
      expect(heap.size()).toBe(3);
  });
});