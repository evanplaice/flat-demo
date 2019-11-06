# ..flat-iterative2

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="flatiterative2array"><code>flatIterative2(array)</code></h3>

Flattens an array of nested arrays using iteration
<br>
<br>
This version uses a less efficient mark-and-sweep approach

#### Arguments
1. `array` *(Array)*: input array

#### Returns
*(Array)*: the flattened array

#### Example
```js
const result = flatIterative2([1, [2, [3, [4]]]]);
console.log(result);
> [1, 2, 3, 4]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
