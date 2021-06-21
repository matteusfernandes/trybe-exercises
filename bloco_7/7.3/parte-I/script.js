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
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3. Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(myRemove([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);

// 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
