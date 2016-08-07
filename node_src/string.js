// String related methods

var validate = function(str) {
  if (typeof str !== 'string') throw new TypeError("Input should be a string");
}

var isPalindromeShort = function (str) {
  validate(str);
  return str === str.split("").reverse().join("");
};

var isPalindromeLong = function (str) {
  validate(str);
  var i = 0,
      j = str.length - 1;
  for (i; i < str.length; i++, j--) {
    if (i === j) break;
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
};

var uniqueChars = function (str) {
  validate(str);
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if ( result.hasOwnProperty(char) ) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
};

/*
  @param str - argument of type string
  @result - shortened/compressed string

  Example, "aaaccbbbd" => "a3c2b3d1"
           "abc" => "abc"
*/

var compressString = function(str) {
  validate(str);
  if (str.length <= 2) return str;

  var result,
      i = 0;
  while (i < str.length) {
    var char = str[i];
    var matchLength = str.substring(i).match(char + "+")[0].length;
    result += char + matchLength;
  }

  return (result.length >= str.length) ? str : result;
}

module.exports = {
  isPalindromeShort: isPalindromeShort,
  isPalindromeLong: isPalindromeLong,
  uniqueChars: uniqueChars,
  compressString: compressString
}