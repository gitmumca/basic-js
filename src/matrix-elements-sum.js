const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
//  return matrix.reduce((sum, el) => sum + el.reduce((summ, ell) => summ += ell, 0), 0)
//  return matrix.reduce(function (newArr, el) {el.reduce(function (newArray, ell) {newArray.push(ell); return newArray;}, newArr); return newArr;}, []).reduce(function (sum, el, i, arr) {sum += (arr[i+1] == 0) ? el : 0; return sum;}, 0);
  let sum = 0;
  let lenI = matrix.length;
  let lenJ = matrix[0].length;

  for (let j=0; j<lenJ; j++) {
    for (let i=0; i<lenI; i++) {
      if (matrix[i][j] == 0) {break;} else {sum += matrix[i][j]}  
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
