/*
  Merge Sort
*/
/*
  @param left - array
  @param right - array
  @result - merge of right and left array
*/
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

/*
  @param arr - unsorted array
  @result - sorted array
*/
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
};

/*
  Bubble Sort
*/

var swap = function(arr, i, k) {
  var temp = arr[i];
  arr[i] = arr[k];
  arr[k] = temp;
}

var bubbleSort = function(arr){
  if ( !(arr instanceof Array) ) return null;
  if (arr.length < 2) return arr;
  var result = JSON.parse(JSON.stringify(arr));
  var j = 1;

  while(j < result.length) {
    for (var i = 0; i < arr.length - j; i++) {
      if(result[i] > result[i + 1]) {
        swap(result, i, i+1);
      }
    }
    j++;
  }

  return result;
};

module.exports = {
  mergeSort: mergeSort,
  bubbleSort: bubbleSort
}