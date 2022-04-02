const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//  let res = members.reduce((arr, el) => arr.push((typeof el == 'string') ? el[0].toUpperCase() : ''), []);
//  members.forEach((el) => (typeof el == 'string') ? res.push(el[0].toUpperCase()) : 0);
//  return members.reduce((arr, el) => (arr.push((typeof el == 'string') ? el[0].toUpperCase() : '')), []).sort().join('');

  if (Array.isArray(members) == false) {return false}
  let res = [];
  members.forEach((el) => (typeof el == 'string') ? res.push(el.replace(/^ +/,'')[0].toUpperCase()) : '');
  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
