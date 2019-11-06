export = flatIterative;
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
declare function flatIterative(array: any[]): any[];
