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
});