const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 function count(matrix, curI, curJ) {
  let res = 0;

  for (let j=curJ-1; j<curJ+2; j++) {
    if (matrix[curI-1][j] == true) {res += 1}
    if (matrix[curI+1][j] == true) {res += 1}
  }

  if (matrix[curI][curJ-1] == true) {res += 1}
  if (matrix[curI][curJ+1] == true) {res += 1}

  return res;
}

function minesweeper(matrix) {
  let indI = matrix.length;
  let indJ = matrix[0].length;
  let res = 0;
  let bigMatrix = [];

  let str = [];
  for (let j=0; j<indJ+2; j++) {str.push(false);}
  bigMatrix.push(str);

  for (let i=0; i<indI; i++) {
    let strAdd = [false];
    for (let j=0; j<indJ; j++) {
      strAdd.push(matrix[i][j]);
    }
    strAdd.push(false);
    bigMatrix.push(strAdd);
  }
  bigMatrix.push(str);

  let resArr = [];
  for (let i=1; i<bigMatrix.length-1; i++) {
    let newStr = [];
    for (let j=1; j<bigMatrix[0].length-1; j++) {
      newStr.push(count(bigMatrix, i, j));
    }
    resArr.push(newStr);
  }

  return resArr;

}

module.exports = {
  minesweeper
};
