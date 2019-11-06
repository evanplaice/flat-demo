/**
 * Flattens an array of nested arrays
 *
 * @param {Array} array input array
 * @param {Array} initial reducer initial state
 * @returns {Array} the flattened array
 *
 * @example
 * const result = flatReduce([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function flatReduce (array, initial = []) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = flatReduce(curr, acc);
    } else {
      acc.push(curr);
    }
    return acc;
  }, initial);
}

module.exports = flatReduce;
