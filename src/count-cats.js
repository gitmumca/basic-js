const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
//  throw new NotImplementedError('Not implemented');
/*  let res = 0;
  matrix.forEach(el => el.forEach(ell => (ell == '^^') ? res += 1 : 0));
  return res;*/

// (arr) => arr.reduce((acc, num) => acc + num, 0);

/*  return matrix.reduce(function(sum, el) {
    return sum + el.reduce(function(sumEll, ell) {
      return sumEll + (ell == '^^') ? 1 : 0;
    }, 0);
  }, 0) */

  return matrix.reduce((sum, el) => sum + el.reduce((sumEll, ell) => sumEll + ((ell == '^^') ? 1 : 0), 0), 0)
}

module.exports = {
  countCats
};
