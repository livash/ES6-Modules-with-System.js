var sort = require("../array_sort");
var SORT_ALGS = ["mergeSort", "bubbleSort", "insertionSort", "selectionSort"];

SORT_ALGS.forEach(function(algName) {
  describe(algName, function() {
    it("should return null if given a non Array input", function() {
      var result = sort[algName]('some_string');
      expect(result).toBeNull();
    });

    it("should return an array", function() {
      var arr = [2,3,1];
      var result = sort[algName](arr);
      expect(result instanceof Array).toBe(true);
    });

    it("should return an empty array if given an empty array", function() {
      var arr = [];
      var result = sort[algName](arr);
      expect(result.length).toBe(arr.length);
    });

    it("should sort array of one item in length", function() {
      var arr = [1];
      var result = sort[algName](arr);
      expect(result.length).toBe(arr.length);
    });

    it("should sort array of two item in length", function() {
      var arr = [2,1];
      var result = sort[algName](arr);
      expect(result.length).toBe(arr.length);
      expect(result.toString()).toBe([1,2].toString());
    });

    it("should sort an array of more than two items", function() {
      var arr = [10,9,8,7,6,5,4,3,2,1];
      var result = sort[algName](arr);
      expect(result.toString()).toBe(arr.reverse().toString());
    });

    it("should sort an array with negative numbers", function() {
      var arr = [3,2,-1,0];
      var result = sort[algName](arr);
      expect(result.toString()).toBe([-1,0,2,3].toString());
    });

    it("should not modify the input array", function() {
      var arr = [3,2,1];
      var result = sort[algName](arr);
      expect(arr.toString()).toBe([3,2,1].toString());
    });
  });
});