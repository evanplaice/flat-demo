export = flatReduce;
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
declare function flatReduce(array: any[], initial?: any[]): any[];
