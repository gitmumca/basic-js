const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
//  if (!Array.isArray(arr)) {throw new Error('\'arr\' parameter must be an instance of the Array!');}

  if (date == undefined) {return 'Unable to determine the time of year!';}
  if ((isNaN(Date.parse(date))) || (date.toString() == (new Date()).toString()) ) {throw new Error('Invalid date!'); }
//  if (date.toString() == (new Date()).toString()) {throw new Error('Invalid date!'); }
  let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  return season[date.getMonth()];
}

module.exports = {
  getSeason
};
