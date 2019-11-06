export = flatRecursive;
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
declare function flatRecursive(array: any[], output?: any[]): any[];
