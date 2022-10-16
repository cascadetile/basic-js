const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let fmt = n.toString();
  let max = fmt.slice(1);
 
  for (let i = 1; i < fmt.length; i++) {
    if (fmt[i + 1]) {
      if ((fmt.slice(0, i) + fmt.slice(i + 1)) > max) max = fmt.slice(0, i) + fmt.slice(i + 1);
    } else {
      if ((fmt.slice(0, i)) > max) max = fmt.slice(0, i) + fmt.slice(i + 1);
    }
    
  }

  return parseInt(max);
}

module.exports = {
  deleteDigit
};
