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
  let obj = {};
  let res = '';
  str.split('').forEach(el => obj[el] = (obj.hasOwnProperty(el)) ? obj[el]+1 : 1);
  for (key in obj) {res += ((obj[key] == 1) ? '' : obj[key]) + key}; 
  return res;
}

module.exports = {
  encodeLine
};
