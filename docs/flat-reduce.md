# ..flat-reduce

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="flatreducearray-initial"><code>flatReduce(array, initial)</code></h3>

Flattens an array of nested arrays

#### Arguments
1. `array` *(Array)*: input array
2. `initial` *(Array)*: reducer initial state

#### Returns
*(Array)*: the flattened array

#### Example
```js
const result = flatReduce([1, [2, [3, [4]]]]);
console.log(result);
> [1, 2, 3, 4]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
