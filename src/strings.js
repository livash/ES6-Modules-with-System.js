let uniqueChars = (str) {
  let hash = {},
      result = {};
  for (let char of str) {
    if (hash.hasOwnProperty(char)) {
      hash[char] += 1;
      delete result[char];
    } else {
      hash[char] = 1;
      result[char] = 1;
    }
  }

  return result;
};

let hasAllUniqueChars = (str) => {
  let uniqueLength = 0;
  for (let key in uniqueChars(str)) {
    uniqueLength +=1;
  }
  return str.length === uniqueLength;
}

let arePermutation = (str1, str2) {
  if (str1.length != str2.length) return false;

  let hash1 = uniqueChars(str1);
  let hash2 = uniqueChars(str2);

  for (let key in hash1) {
    if (!hash2.hasOwnProperty(key)) return false;
  }

  return true;
}

/*
  @param str - argument of type string
  @result - a new string where all " " characters are substituted with "%20"
*/
let removeSpaces(str) {
  let i = 0,
    result = '';
  for (let char of str) {
    if (char === ' ') {
      result += '%20';
    } else {
      result += char;
    }
    i++;
  }

  return result;
}

/*
  @param str - argument of type string
  @result - shortened/compressed string

  Example, "aaaccbbbd" => "a3c2b3d1"
           "abc" => "abc"
*/
let compressString(str) => {
  if (typeof str !== 'string') return null;
  if (str.length <= 3) return str;

  let result = '';
  let i = 0;
  while (i < str.length) {
    let char = str[i];
    let match = str.substring(i).match(char+"+")[0].length;
    result += char + match;
    i += match;
  }

  if (result.length >= str.length){
    return str;
  }

  return result;
}

/*
  @param s1 - string to be compared to
  @param s2 - string used in comparison
  @result - is s2 is a substring of s1, return "true"
*/

let isSubstring(s1, s2) => {
  return !!(s1.match(s2));
}

export { uniqueChars, hasAllUniqueChars, arePermutation, removeSpaces, compressString };

