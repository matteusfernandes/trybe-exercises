const assert = require('assert');

// 1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.deepStrictEqual(greetPeople(parameter), result);

// *************************************************************************************************

// 2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes. 
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let counter = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      counter += 1;
      results.push(counter);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

// const parameter = 'Dayane';
// const result = 'D1y2n3';
// assert.strictEqual(removeVowels('Dayane'), 'D1y2n3');

// *************************************************************************************************

// 3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greaterThanTenNew = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

// const parameter = [4, 10, 32, 9, 21];
// const result = [32, 21];

// assert.strictEqual(typeof greaterThanTenNew, 'function');
// const output = greaterThanTenNew(parameter);
// assert.deepStrictEqual(output, result);

// *************************************************************************************************

// 4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
const output = secondThirdSmallest(parameter);
assert.deepStrictEqual(output, result);