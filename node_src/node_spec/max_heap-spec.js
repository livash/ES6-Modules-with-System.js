var MH = require('../max_heap');

describe("Max Heap", function() {
  it("should create an empty heap on construction", function() {
    var heap = new MH.MaxHeap();
    expect(heap.array.length).toBe(0);
  });

  it("should a heap with a inner property called 'array'", function() {
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

  it('should return the correct value for the max number inserted into the heap', function() {
    var heap = new MH.MaxHeap();
    heap.add(10)
        .add(20)
        .add(30);
      expect(heap.getMax()).toBe(30);
  });

  it('should return correct toString representation of a MaxHeap object', function() {
    var heap = new MH.MaxHeap();
    var arr = [10,20,30,40];
    arr.forEach(function(item) {
      heap.add(item);
    })
      expect(heap.toString()).toBe(arr.reverse().toString());
  });
});