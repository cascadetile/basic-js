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

  let stats = {};

  doms = doms.map((dom) => dom.split('.').reverse()).map((element) => {
    let dom =  [...element];
    dom[0] = '.' + dom[0];
    return dom.join('.');
  });

  for (let i = 0; i < doms.length; i++) {
    if (!stats[doms[i]]) {
      stats[doms[i]] = 0;
    }

    let domain = doms[i].split('.');
    domain.shift();
    domain[0] = '.' + domain[0];

    while (domain.length) {

      if (!stats[domain.join('.')]) {
        stats[domain.join('.')] = 0;
      }

      if (doms[i].includes(domain.join('.'))) {
        stats[domain.join('.')]++;
      }

      domain.pop();

    }

    
  }

  return stats;
}

module.exports = {
  getDNSStats
};
