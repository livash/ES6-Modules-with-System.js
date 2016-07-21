var bucketSort = require('../bucket_sort');

describe("Bucket Sort method", function() {
  it("should return an object", function() {
    var arr = [1,3,10, 120, 1000],
        options = {
          min: 0,
          max: 1000,
          buckets: 10
        };

    var result = bucketSort.sort(arr, options);
    expect(typeof result).toBe('object');
  });

  it("should return an object with the number of properties equal or less to the number of buckets", function() {
    var arr = [1, 1, 1,3,10, 120, 1000],
        options = {
          min: 0,
          max: 1000,
          buckets: 10
        };

    var result = bucketSort.sort(arr, options);
    var length = 0;
    for (var prop in result) {
      length++;
    }

    expect(length <= options.buckets).toBeTruthy();
  });

  it("return null result if the input argument for the array is not an array", function() {
    var arr = "this is not an array",
        options = {
          min: 0,
          max: 1000,
          buckets: 10
        };
    var result = bucketSort.sort(arr, options);
    expect(result).toBeNull();
  });

  it ("returns null if other input arguments are not of type number", function() {
    var arr = [1, 1, 1,3,10, 120, 1000],
        options = {
          min: "min",
          max: "1000",
          buckets: 10
        };

    var result = bucketSort.sort(arr, options);
    expect(result).toBeNull();
  });
});