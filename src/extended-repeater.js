const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let repeatTimes = options['repeatTimes'];
  let separator = options['separator'] || '+';
  let addition = (options['addition'] === undefined) ? '' : (options['addition'] === null) ? 'null' : String(options['addition']);
  let additionRepeatTimes = options['additionRepeatTimes'] || '';
  let additionSeparator = options['additionSeparator'] || '|';

  let res = String(str);
  let curAdd = addition;
  for (let j=1; j<additionRepeatTimes; j++) {curAdd += additionSeparator + addition}

  for (let i=1; i<repeatTimes; i++) {
    curAdd = addition;
    for (let j=1; j<additionRepeatTimes; j++) {curAdd += additionSeparator + addition}
    res += curAdd + separator + str;
  }
  return res + curAdd;
}

module.exports = {
  repeater
};
