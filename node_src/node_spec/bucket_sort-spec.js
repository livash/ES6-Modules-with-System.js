var bucketSort = require('../bucket_sort');

describe("Bucket Sort method", function() {
  it("should return an object", function() {
    var arr = [1,3,10, 120, 1000],
        min = 0,
        max = 1000,
        buckets = 10;

    var result = bucketSort.sort(arr, min, max, buckets);
    expect(typeof result).toBe('object');
  });

  it("should return an object with the number of properties equal or less to the number of buckets", function() {
    var arr = [1, 1, 1,3,10, 120, 1000],
        min = 0,
        max = 1000,
        buckets = 10;

    var result = bucketSort.sort(arr, min, max, buckets);
    var length = 0;
    for (var prop in result) {
      length++;
    }
    bucketSort.printBuckets(result);
    expect(length <= buckets).toBeTruthy();
  });
});