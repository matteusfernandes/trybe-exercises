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
function wordLengths() {

}

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);