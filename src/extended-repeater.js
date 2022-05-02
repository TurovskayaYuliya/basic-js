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
  let array = [];

  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if(options.addition === undefined) options.addition = '';

  for (i = 0; i < options.repeatTimes; i++) {

    if (options.repeatTimes > 1 || options.repeatTimes === 1) {
      array.push(String(str));

      for (j = 0; j < options.additionRepeatTimes; j++) {
        if (options.additionRepeatTimes > 1 && j != options.additionRepeatTimes - 1) {
          array.push(String(options.addition), options.additionSeparator);
        } else {
          array.push( String(options.addition));
        }
      }
    }

    if (options.repeatTimes > 1 && i != options.repeatTimes - 1) {
      array.push(options.separator);
    }
  }

  return array.join('');
  
}

module.exports = {
  repeater
};
