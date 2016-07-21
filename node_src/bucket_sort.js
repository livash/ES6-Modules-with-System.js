/*
  Bucket sort

  @param arr - input array of integers
  @param min - minmal value in the array
  @param max - value in the array
  @param buckets - number of buckets to sort the data into

  @result - object where key value pairs correspond to the bucket number and all elements in the bucket

  for example:
  result = {
      "0": [1,2,3,4,...],
      "1": [11, 12, 14, ..],
      ...
  }
*/
var sort = function(arr, min, max, buckets) {
  // TODO: add cjecks on input arguments
  var result = {};
  var delta = Math.ceil( (max - min) / buckets);

  for (var i = 0; i < arr.length; i++) {
    var bucket = Math.floor(arr[i] / delta);
    addToBucket(result, bucket, arr[i]);
  }

  return result;
}

function addToBucket(buckets, bucketId, item) {
  if (buckets.hasOwnProperty(bucketId)) {
    buckets[bucketId].push(item);
  } else {
    buckets[bucketId] = [item];
  }
}

var printBuckets = function(buckets) {
  for (var prop in buckets) {
    console.log(prop, buckets[prop].toString());
  }
}

module.exports = {
  sort: sort,
  printBuckets: printBuckets
}