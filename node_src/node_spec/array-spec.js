var array = require("../array");

describe("rotate method", function() {
  it("should return an array when passed an array", function() {
    var arr = [1];
    var result = array.rotate(arr);
    expect(result instanceof Array).toBe(true);
  });

  it("should return an empty array when given an empty array", function() {
    var arr = [];
    var result = array.rotate(arr);
    expect(result.length).toBe(0);
  });

  it("should take the last element of the array and place it as the first element in the array", function() {
    var arr = [1,2,3];
    var result = array.rotate(arr);
    expect(result[0]).toBe(arr[arr.length - 1]);
  });

  it("should not modify the original array", function() {
    var arr = [1,2,3];
    var copy = JSON.parse(JSON.stringify(arr));
    var result = array.rotate(arr);
    expect(arr.toString()).toBe(copy.toString());
  });
});

describe("rotateK method", function() {
  it("should return array if passed an array", function() {
    var arr = [];
    var result = array.rotateK(arr);
    expect(result instanceof Array).toBe(true);
  });

  it("should rotate the array once, if no 2nd argument is passed", function() {
    var arr = [1,2,3];
    var result = array.rotateK(arr);
    expect(result.toString()).toBe([3,1,2].toString());
  });

  it ("should rotate the array 'k' times", function() {
    var arr = [1,2,3,4,5];
    var result = array.rotateK(arr, 2);
    expect(result.toString()).toBe([4,5,1,2,3].toString());
  });
});

describe("findMin method", function() {
  it("should find min integer in an array", function() {
    var arr = [1,2,3];
    var result = array.findMin(arr);
    expect(result).toBe(1);
  });

  it("should find min integer in a rotated array", function() {
    var arr = [4,5,1,2,3];
    var result = array.findMin(arr);
    expect(result).toBe(1);
  });
});