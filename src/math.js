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
  @param num - number of the Fibonacci sequence memebers to return
  @result - array of the Fibonacci sequence members
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

/*
  @param idx - index of the Fibonacci sequence member to be returned; Note index is '0' based
  @result - number from the Fibonacci sequence
*/
function getFibonacci(idx) {
  if (idx === 0) return 0;
  if (idx === 1) return 1;

  return getFibonacci(idx - 1) + getFibonacci(idx - 2);
}

export {sum, pi, fibonacci, getFibonacci}