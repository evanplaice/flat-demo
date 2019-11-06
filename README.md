# Array.flat()

This repo explores a variety of implementations for flattening a deeply nested array of arrays

## Installation

```sh
npm i github:evanplaice/flat-demo
```

## Testing

```sh
npm run test
```

## Usage

```javascript
const flatIterative = require('flat-demo').flatIterative;
const result = flatIterative([1, [2, [3, [4]]]]);
console.log(result);
// > [1, 2, 3, 4]
```

## Implementations

- [flat-iterative][flat.iterative]
- [flat-reduce][flat.reduce]
- [flat-recursive][flat.recursive]

[flat.iterative]: ./docs/flat-iterative.md
[flat.reduce]: ./docs/flat-reduce.md
[flat.recursive]: ./docs/flat-recursive.md
