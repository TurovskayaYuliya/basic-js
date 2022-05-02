const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const array = [];
  let count = 0;

  for (let i = 0; i < names.length; i++) {

    if (names.slice(0, i).includes(names[i], 0)) {
      count += 1;
      array.push(`${names[i]}(${count})`);
    } else {
      array.push(names[i]);
    }
  }

  let count2 = 0;
  const result = [];

  for (let i = 0; i < array.length; i++) {
    
    if (array.slice(0, i).includes(array[i], 0)) {
      count2 += 1;
      result.push(`${array[i]}(${count2})`);
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
