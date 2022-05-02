const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayS1 = s1.split('').sort();
  const arrayS2 = s2.split('').sort();
  let result = 0;

  for (let i = 0; i < arrayS1.length; i++) {
    if (arrayS2.includes(arrayS1[i], i) === true) {
      result += 1;
    }

    if (arrayS1[i] === arrayS1[i - 1] && arrayS2.includes(arrayS1[i], i) !== true) {
      arrayS1.splice(i, 1);
      i--;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
