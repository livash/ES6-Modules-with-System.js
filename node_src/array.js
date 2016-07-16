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

module.exports = {
  rotate: rotate,
  rotateK: rotateK
}