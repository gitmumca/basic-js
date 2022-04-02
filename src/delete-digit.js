const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let max = Number(String(n).slice(1));
  let arrStr = String(n);
  String(n).split('').forEach(function (el, i, arr) {
    num = Number(arrStr.slice(0,i) + arrStr.slice(i+1));
    if (num > max) {max = num}
  });
  return max;
}

module.exports = {
  deleteDigit
};
