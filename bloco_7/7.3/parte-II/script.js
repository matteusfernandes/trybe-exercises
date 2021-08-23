const assert = require('assert');

// FUNÇÃO addOne
function addOne(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index] + 1);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// **************************************************************************************

// FUNÇÃO wordLengths
function wordLengths(array) {
  const newArray = [];
  for (key in array) {
    newArray.push(array[key].length)
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// **************************************************************************************

// FUNÇÃO sumAllNumbers
function sumAllNumbers(array) {
  let sumAll = 0;
  for (key in array) {
    sumAll += array[key];
  }
  return sumAll;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// **************************************************************************************

// FUNÇÃO findTheNeedle
function findTheNeedle(array, word) {
  for (key in array) {
    if (array[key] === word) {
      return parseInt(key);
    }
  }
  return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);