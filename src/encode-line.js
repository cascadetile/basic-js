const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  
  arr.push([1, str[0]])
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === arr[arr.length - 1][1]) {
      arr[arr.length - 1] = [arr[arr.length - 1][0] + 1, str[i]]
    } else {
      arr.push([1, str[i]])
    }
  }
  
  return arr.map((element) => {
    if (element[0] > 1) {
      return element[0] + element[1];
    } else {
      return element[1];
    }
  }).join('');
}

module.exports = {
  encodeLine
};
