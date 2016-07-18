/*
  @param arr - array
  @param k - number of times to rotate the array
  @result - take the last element of the array and add it to the beginning of the array
*/
function rotate(arr) {
  if (arr.length == 0) return arr;

  var result = JSON.parse(JSON.stringify(arr));
  var item = result.pop();
  result.unshift(item);
  return result;
}

/*
  @param arr - array
  @param k - number of times to rotate the array
  @result - take the last element of the array and add it to the beginning of the array
*/
function rotateK(arr, k) {
  var k = k || 1;
  var result = JSON.parse(JSON.stringify(arr));
  while (k > 0) {
    result = rotate(result);
    k--;
  }

  return result;
}

/*
  method to check whether an array of intergers is sorted in the ASC order
  @param arr - array of integers
  @result boolean
*/

function isSorted(arr) {
  for (var i = 0; i < arr.length; i++) {
    if ( (i + 1 < arr.length) && arr[i] > arr[i+1]) {
      return false;
    }
  }

  return true;
}

/*
  Find smallest element in an array of integers which is sorted in ASC order
  and has been rotated "K" times

  @param arr - input sorted and then rotated array of integers
  @result - interger corresponding to the 'min' value in the input array
*/
function returnUnsortedPart(arr) {
  if (arr.length == 0) return null;
  if (arr.length == 2) return arr;

  var left, right, result,
      mid = Math.floor(arr.length / 2);
  if (mid == 1) {
    left = [arr[0]];
    right = [arr[1]];
  } else {
    left = arr.slice(0, mid); // not including mid
    right = arr.slice(mid, arr.length);
  }
  if (left[left.length - 1] )

  return isSorted(left) ? right : left;
}

function findMin(arr) {
  if ( !(arr instanceof Array) ) return null;
  if (arr.length == 0) return null;
  if (arr.length == 1) return arr[0];

  var result = JSON.parse(JSON.stringify(arr));
  while(result.length > 2) {
    console.log("Result:   ", result);
    result = returnUnsortedPart(result);
  }
  console.log("result: ", result);

  return ( result[0] > result[1] ) ? result[1] : result[0];
}

var arr = [4,5,1,2,3];
console.log( findMin(arr) );

module.exports = {
  rotate: rotate,
  rotateK: rotateK,
  isSorted: isSorted,
  findMin: findMin
}