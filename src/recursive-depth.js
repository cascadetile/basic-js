const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr, j = 0) {

    // check if flat

    let flat = false;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) break;

      if (i === arr.length - 1) flat = true;
    }

    // if not flat

    if (!flat) {
      let max = 1;

      let counter = 0;
      
      // check if nested element is not array
      if (!Array.isArray(arr)) {
        
        return 0;
        
      } else {
        
        // start counting if it's an array
        if (j > 0) {
          counter++;
        }
        

        j++;
        
        for (let i = 0; i < arr.length; i++) {
            
          counter += this.calculateDepth(arr[i], j);
          
        }
    
        return counter;
      }

    }

    // depth of flat array is 1
    return 1;
    
  }
}

module.exports = {
  DepthCalculator
};
