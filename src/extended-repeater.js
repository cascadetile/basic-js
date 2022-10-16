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
  let fmt = str + '';

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    if (options.addition !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        fmt += options.addition + '';
        if (options.additionSeparator && j !== options.additionRepeatTimes - 1) {
          fmt += options.additionSeparator;
        }
      }
    }
    if (options.separator && i !== options.repeatTimes - 1) fmt += options.separator;
    if (i !== options.repeatTimes - 1) fmt += str;
  }

  return fmt;
  
}

module.exports = {
  repeater
};
