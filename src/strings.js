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

export { uniqueChars, hasAllUniqueChars };