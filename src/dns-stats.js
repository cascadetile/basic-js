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
  let doms = [...domains];

  doms = doms.map((dom) => dom.split('.').reverse()).map((element) => {
    let dom =  [...element];
    dom[0] = '.' + dom[0];
    return dom;
  });

  let set = new Set(doms.flat(1));

  return set;
}

module.exports = {
  getDNSStats
};
