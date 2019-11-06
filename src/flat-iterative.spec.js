const test = require('tape');
const flat = require('./flat-iterative.js');

test('flat(array) - should return an empty array if the input is empty', t => {
  const expect = [];
  const result = flat([]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('flat(array) - an already flat array should return the same as the input', t => {
  const expect = [1, 2, 3, 4, 5];
  const result = flat([1, 2, 3, 4, 5]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 5, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('flat(array) - should flat multiple levels of nested arrays with ascending depth', t => {
  const expect = [1, 2, 3, 4];
  const result = flat([1, [2, [3, [4]]]]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('flat(array) - should flatten if the input includes empty arrays', t => {
  const expect = [1, 3];
  const result = flat([1, [], 3, []]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
