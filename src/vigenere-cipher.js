const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(...args) {

    if ((args[0] === undefined) || (args[1] === undefined)) {throw new Error('Incorrect arguments!'); } 

    function encr(el, key) {
      const alphavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let ind = alphavit.indexOf(el.toUpperCase()) + alphavit.indexOf(key.toUpperCase());
      if (ind > 25) {ind = ind - 26;}
      return alphavit[ind];
    }
      
    let str = [...args][0];
    let key = [...args][1];
    key = key.split('');

    let keyI = 0;
    let newStr1 = str.split('').reduce(function (newStr, el) {
      if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(el.toUpperCase())) {
        newStr += encr(el, key[keyI]);
        keyI = (keyI < key.length-1) ? keyI+1 : 0;
      }
      else {newStr += el;}
      return newStr;
    }, '');
  
    return (this.reverse == false) ? newStr1.split('').reverse().join('') : newStr1;
  }

  decrypt(...args) {

    if ((args[0] === undefined) || (args[1] === undefined)) {throw new Error('Incorrect arguments!'); } 

    function decr(el, key) {
      const alphavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let ind = alphavit.indexOf(el) - alphavit.indexOf(key.toUpperCase());
      if (ind < 0) {ind = ind + 26;}
      return alphavit[ind];
    }
      
    let str = [...args][0];
    let key = [...args][1];
    key = key.split('');
  
    let keyI = 0;
    let newStr1 = str.split('').reduce(function (newStr, el) {
      if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(el)) {
        newStr += decr(el, key[keyI]);
        keyI = (keyI < key.length-1) ? keyI+1 : 0;
      }
      else {newStr += el;}

      return newStr;
    }, '');
  
    return (this.reverse == false) ? newStr1.split('').reverse().join('') : newStr1;
  }
}

module.exports = {
  VigenereCipheringMachine
};
