const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let newArray = arr.reduce(function (newArray, el) {(el>0) ? newArray.push(el) : 0; return newArray;}, []).sort((a,b) => a-b);

  return arr.reduce(function (resArray, el) {
    if (el>0) {
      resArray.push(newArray[0]);
      newArray.shift();
    }
    else {resArray.push(-1)}
    
    return resArray;
  }, []);
}

module.exports = {
  sortByHeight
};
