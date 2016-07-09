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

/*
  "Look-and-say" Sequence
  https://en.wikipedia.org/wiki/Look-and-say_sequence

  Example of the first 10 elements for this sequence:

  ["1", "11", "21", "1211", "111221", "312211", "13112221", "1113213211", "31131211131221", "13211311123113112211"]
*/

/*
  @param array - array representing the elements of the Look-and-say sequence
  @result - next element of the Look-and-say sequence
*/
function lookSay(array) {
  if (array.length === 0) return "1";
  let lastElement = array[array.length - 1].toString();
  let result = '';

  // look at the last element count the number of repeating digits from the beginning
  while (lastElement.length > 0) {
    let firstChar = lastElement[0];
    let m = lastElement.match(firstChar + "*")[0].length;
    result += m + firstChar;
    lastElement = lastElement.substr(m);
  }

  return result;
}

/*
  @param num - number of elements from a Look-and-say sequence to print out
  @result - array of numbers
*/

function lookAndSay(num) {
  if (typeof num !== 'number') return [];
  if (num <= 0) return [];

  let result = [];
  while (num > 0) {
    result.push(lookSay(result));
    num -= 1;
  }

  return result;
}

function processLookAndSay(element) {
  let result = '';

  // look at the last element count the number of repeating digits from the beginning
  while (element.length > 0) {
    let firstChar = element[0];
    let m = element.match(firstChar + "*")[0].length;
    result += m + firstChar;
    element = element.substr(m);
  }

  return result;
}

/*
  @param num - index of the element in the Look-and-say sequence
  @result - a string repsesenting the element in the Look-and-say sequence
*/

function lookAndSayElement(num) {
  if (typeof num !== 'number') return null;
  if (num < 0) return null;
  if (num === 0) return '1';

  return processLookAndSay(lookAndSayElement(num - 1));
}

export {sum, pi, fibonacci, getFibonacci, lookAndSay, lookAndSayElement}