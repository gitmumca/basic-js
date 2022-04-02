const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {

  calculateDepth(arr) {
/*    
    function calcRecur (arr, calc) {
      let max = calc; 
      arr.forEach(function (el) {
       if (Array.isArray(el)) {
         let newCalc = calcRecur(el, calc+1);
         if (newCalc > max) {max = newCalc;}
       } 
      })
      return max;  
    }
  
    return calcRecur(arr, 1);
*/
      let max = 1; 
      arr.forEach((el) => {
       if (Array.isArray(el)) {
         let newCalc = 1 + this.calculateDepth(el);
         if (newCalc > max) {max = newCalc;}
       } 
      })
      return max;        
  }
}

module.exports = {
  DepthCalculator
};
