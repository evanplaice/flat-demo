/**
 * Flattens an array of nested arrays using recursion
 *
 * @param {Array} array input array
 * @returns {Array} the flattened array
 *
 * @example
 * const result = flatRecursive([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function flatRecursive (array, output = []) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatRecursive(item, output);
    } else {
      output.push(item);
    }
  });
  return output;
}

module.exports = flatRecursive;
