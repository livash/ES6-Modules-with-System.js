/*
  Bucket sort

  @param arr - input array of integers
  @param options = {
                  min: minimal value in the array,
                  max: max value in the array,
                  buckets: number of buckets to sort the data into
                }

  @result - object where key value pairs correspond to the bucket number and all elements in the bucket

  for example:
  result = {
      "0": [1,2,3,4,...],
      "1": [11, 12, 14, ..],
      ...
  }
*/
var sort = function(arr, options) {
  var min = options.min,
      max = options.max,
      buckets = options.buckets;
  if ( !(arr instanceof Array)) return null;
  if (typeof min !== 'number' || typeof max !== 'number' || typeof buckets !== 'number') {
    return null;
  }
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