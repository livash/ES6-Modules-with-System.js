var sort = require("../array_sort");

describe("merge sort method", function() {
  it("should return an array", function() {
    var arr = [];
    var result = sort.mergeSort(arr);
    expect(result instanceof Array).toBe(true);
  });

  it("should sort array of one item in length", function() {
    var arr = [1];
    var result = sort.mergeSort(arr);
    expect(result.length).toBe(arr.length);
  });

  it("should sort array of two item in length", function() {
    var arr = [2,1];
    var result = sort.mergeSort(arr);
    expect(result.length).toBe(arr.length);
    expect(result.toString()).toBe([1,2].toString());
  });

  it("should sort an array of more than two items", function() {
    var arr = [10,9,8,7,6,5,4,3,2,1];
    var result = sort.mergeSort(arr);
    expect(result.toString()).toBe(arr.reverse().toString());
  });
});