var merge = function (left, right) {
  var result = [];
  while ( (left.length + right.length) > 0 ) {
    if (left.length > 0 && right.length > 0) {
      if (left[0] > right[0]) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    if (right.length > 0 && left.length === 0) {
      result.push(right.shift());
    }

    if (left.length > 0 && right.length === 0) {
      result.push(left.shift());
    }
  }

  return result;
};

// sorted array is presented in the ascending order
var mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  // sort the array
  var left, right,
      mid = Math.floor(arr.length / 2);
  if (arr.length == 2) {
    left = [arr[0]];
    right = [arr[1]];
  } else {
    left = arr.slice(0, mid);
    right = arr.slice(mid, arr.length);
  }

  left = mergeSort(left);
  right = mergeSort(right);

  var result = merge(left, right);

  return result;
}

module.exports = {
  mergeSort: mergeSort
}