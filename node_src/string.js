// String related methods

var isPalindromeShort = function (str) {
  return str === str.split("").reverse().join("");
}

var isPalindromeLong = function (str) {
  var i = 0,
      j = str.length - 1;
  for (i; i < str.length; i++, j--) {
    if (i === j) break;
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPalindromeShort: isPalindromeShort,
  isPalindromeLong: isPalindromeLong
}