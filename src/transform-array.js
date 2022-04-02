const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error('\'arr\' parameter must be an instance of the Array!');}
  
  let res = [];
  arr.map(function (el, i) {
    if ((((el == '--double-prev') || (el == '--discard-prev')) && (i == 0)) || 
       (((el == '--double-next') || (el == '--discard-next')) && (i == arr.length-1))) {} 
    else {
      res.push(el);
    }
  });

  for (let i=0; i<res.length; i++) {
    if (res[i] == '--double-next') {res[i] = res[i+1];}
    if (res[i] == '--double-prev') {res[i] = res[i-1];}
    if (res[i] == '--discard-next') {res[i+1] = 'discard';}
    if (res[i] == '--discard-prev') {res[i-1] = 'discard';}
  }
  /*
  res.map(function (el, i) {
    if (el == '--double-next') {el = res[i+1];}
    if (el == '--discard-next') {res[i+1] = 'discard';}
    if (el == '--double-prev') {el = res[i-1];}
    if (el == '--discard-prev') {res[i-1] = 'discard';}
  });
  */
  return res.filter(el => ((el != 'discard') && (el != '--discard-next') && (el != '--discard-prev')));
}

module.exports = {
  transform
};
