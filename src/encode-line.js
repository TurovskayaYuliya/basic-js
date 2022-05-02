const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const result = [];
  let count = 1;

  for (let i = 0; i < array.length; i++) {
    
    if (array[i] === array[i + 1]) {
      count += 1;
    } else if (array[i] !== array[i + 1]) {
      if (count === 0 || count === 1) {
        result.push(array[i]);
      } else {
        result.push(count, array[i]);
      }
      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
