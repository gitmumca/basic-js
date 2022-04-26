const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let add = '[a-z]*[.]';
  return domains.reduce(function(obj, el) {
    let str = '[a-z]*$';
    flag = true;
    do {
      let find = el.match(new RegExp((str.indexOf('.') > -1) ? str : '[.]'+str, 'g'));
      if (find == undefined) {flag = false;}
      else {
        let key = '.' + find[0].split('.').filter(el => el!='').reverse().join('.');
        if (obj.hasOwnProperty(key)) {obj[key] += 1} else {obj[key] = 1;}
        str = add + str;
      }
    } while (flag)
    return obj;
  }, {})
}

module.exports = {
  getDNSStats
};
