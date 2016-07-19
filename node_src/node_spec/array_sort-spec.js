var sort = require("../array_sort");

describe("Merge Sort method", function() {
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

describe("Bubble Sort method", function() {
  it("should return an array" , function() {
    var arr = [1,2,3];
    var result = sort.bubbleSort(arr);
    expect(result instanceof Array).toBe(true);
  });

  it("should return empty array when given as an argument an empty array", function() {
    var arr = [];
    var result = sort.bubbleSort(arr);
    expect(result.length).toBe(0);
  });

  it("should sort an array", function() {
    var arr = [5,4,3,2,1];
    var result = sort.bubbleSort(arr);
    expect(result.toString()).toBe([1,2,3,4,5].toString());
  });

  it("should sort an array with negative numbers", function() {
    var arr = [3,2,-1,0];
    var result = sort.bubbleSort(arr);
    expect(result.toString()).toBe([-1,0,2,3].toString());
  });
});