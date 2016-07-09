function sum(x, y) {
  return x + y;
}

var pi = 3.141593;

function nextFib(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;

  let len = array.length;
  let last = array[len - 1];
  let nextToLast = array[len -2];

  return last + nextToLast;
}

/*
  @param num - number of the fibonacci sequence memebers to return
  @result - array of fibonacci sequence members
*/
function fibonacci(num) {
  if (typeof num !== 'number') return [];
  if (num <= 0 ) return [];

  let result = [];
  while (num > 0) {
    result.push(nextFib(result));
    num -= 1;
  }

  return result;
}

export {sum, pi, fibonacci}