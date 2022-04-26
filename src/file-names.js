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
function findNumber(newArr, el) {
  let nextNumber = 1;
  let flag = false;
  do {
    if (newArr.includes(el + '(' + nextNumber + ')')) {nextNumber += 1;} else {flag = true;}
  } while (!flag)
  return nextNumber;
}

function renameFiles(names) {
  return names.reduce(function (newArr, el) {
    if (newArr.includes(el)) {
      if (el[el.length-1] == ')') {
        newArr.push(el+'(1)')
      } else {newArr.push(el+'(' + findNumber(newArr, el) + ')');}
    } else {newArr.push(el);} 
    return newArr;
  }, [])
}

module.exports = {
  renameFiles
};
