const { myRemove } = require('../src/myRemove');

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  const myArray = [1, 2, 3, 4];
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove(myArray, 3));
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove(myArray, 1)).not.toEqual(myArray);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove(myArray, 5));
  });
});