# javascript-course

# Arrays

## Difference Between `slice` and `splice` in JavaScript

### `slice`

- **Purpose**: To create a new array by extracting a section of an existing array.
- **Original Array**: Unmodified.
- **Parameters**:
  - `start`: Index at which to begin extraction.
  - `end` (optional): Index before which to end extraction (non-inclusive).

#### Example

```javascript
const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.slice(1, 4);

console.log(newArray);
// Output: [2, 3, 4]

console.log(originalArray);
// Output: [1, 2, 3, 4, 5] (unchanged)
```

### `splice`

- **Purpose**: To modify existing array by extracting a section of an existing array.
- **Original Array**: Modified.
- **Parameters**:
  - `start`: Index at which to begin extraction.
  - `end` (optional): Index before which to end extraction (inclusive).

#### Example

```javascript
const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.splice(1, 4);

console.log(newArray);
// Output: [2, 3, 4, 5]

console.log(originalArray);
// Output: [1] (changed)
```

## Beyond the Basics

### JSVU

JavaScript Version Updater

```sh
npm i -g jsvu
```

Download Additional Tools

```sh
jsvu --os=win64 --engines=all
```
