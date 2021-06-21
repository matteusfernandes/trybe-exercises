const assert = require('assert');

// FUNÇÃO sum
function sum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('parameters must be numbers');
	}

	return a + b;
}

// TESTES UNITÁRIOS
// 1. Teste se o retorno de sum(4, 5) é 9
// assert.strictEqual(sum(4,5), 9);

// 2. Teste se o retorno de sum(0, 0) é 0
// assert.strictEqual(sum(0, 0), 0);

// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// assert.throws(sum(4, '5'));

// 4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
// assert.ifError('parameters must be numbers');

// ****************************************************************************************************************************

// FUNÇÃO myRemove
function myRemove(arr, item) {
	let newArr = [];
	for (let index = 0; index < arr.length; index += 1) {
		if (item !== arr[index]) {
			newArr.push(arr[index]);
		}
	}
	return newArr;
}

// TESTES UNITÁRIOS
// 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3. Verifique se o array passado por parâmetro não sofreu alterações
// assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);

// 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);

// ****************************************************************************************************************************

// FUNÇÃO myRemoveWithoutCopy
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// const testList = [1, 2, 3, 4];
// assert.deepStrictEqual(myRemoveWithoutCopy(testList, 3), [1, 2, 4]);

// 2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(myRemoveWithoutCopy(testList, 3), [1, 2, 3, 4]);

// 3. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// assert.deepStrictEqual(myRemoveWithoutCopy(testList, 1), [2, 3, 4]);

// 4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// ****************************************************************************************************************************

// FUNÇÃO myFizzBuzz
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(3), 'fizz');

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(5), 'buzz');

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(2), 2);

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('3'), false);