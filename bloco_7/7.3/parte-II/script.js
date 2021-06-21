const assert = require('assert');
// escreva a função addOne aqui

function addOne(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    let actualElement = arr[index];
    arr.splice(index, 1, (actualElement +1));
  }
  return arr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);