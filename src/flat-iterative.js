/* eslint no-labels: 0 */
/**
 * Flattens an array of nested arrays using iteration w/ O(n) time complexity
 *
 * @param {Array} array input array
 * @returns {Array} the flattened array
 *
 * @example
 * const result = flatIterative([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function flatIterative (array) {
  let start = 0;
  const stack = [];
  const idx = [];
  const output = [];

  outer: do {
    inner: for (let i = start; i < array.length; i++) {
      // handle arrays
      if (Array.isArray(array[i])) {
        // Edge Case: skip empty arrays
        if (array[i].length === 0) { continue inner; }

        stack.push([array, i]); // outer array goes on the stack
        idx.push(i + 1); // mark next index of outer array
        start = 0; // reset the start index
        array = array[i]; // inner array gets traversed next
        continue outer; // restart the array traversal
      }

      // handle values
      output.push(array[i]);
    }

    // pop the stack if the top layer is done
    array = stack.pop();
    start = idx.pop();
  } while (stack.length > 0);

  return output;
}

module.exports = flatIterative;
