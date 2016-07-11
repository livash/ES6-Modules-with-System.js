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

export { uniqueChars, hasAllUniqueChars, arePermutation, removeSpaces };