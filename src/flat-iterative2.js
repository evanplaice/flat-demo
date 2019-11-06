/* eslint no-labels: 0 */
/**
 * Flattens an array of nested arrays using iteration
 *
 * This version uses a less efficient mark-and-sweep approach
 *
 * @param {Array} array input array
 * @returns {Array} the flattened array
 *
 * @example
 * const result = flatIterative2([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function flatIterative2 (array) {
  const stack = [];
  const output = [];

  outer: do {
    // return when every index has been visited
    if (array[array.length - 1] === null) { return output; }

    inner: for (let i = 0; i < array.length; i++) {
      console.log('hit');
      // skip visited values
      if (array[i] === null) {
        continue inner;
      }
      // handle arrays
      if (Array.isArray(array[i])) {
        // replace empty arrays with null
        if (array[i].length === 0) {
          array[i] = null;
          continue inner;
        }
        stack.push([array, i]);
        array = array[i];
        continue outer;
      }

      // add values to the output
      output.push(array[i]);
      // mark visited items
      array[i] = null;
    }

    // pop the stack if the top layer is done
    array = stack.pop();
  } while (stack.length > 0);

  return output;
}

module.exports = flatIterative2;
