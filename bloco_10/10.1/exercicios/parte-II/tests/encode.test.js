const { encode } = require('../src/encode');

describe('Se "encode" é uma função', () => {
  test('se encode está declarada e é do tipo função', () => {
    expect(encode).toBeDefined();
    expect(typeof encode).toBe('function');
  });
});

describe('Convertendo as vogais a, e, i, o, u', () => {
  test('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('se as vogais u, o, i, e, a são convertidas em 5, 4, 3, 2 e 1 respectivamente', () => {
    expect(encode('uoiea')).toBe('54321');
  });
});

describe('Convertendo as vogais dentro de palavras', () => {
  test('se as demais letras não são convertidas', () => {
    expect(encode('abcdefghijklmnopqu')).toBe('1bcd2fgh3jklmn4pq5');
  });
});

describe('Convertendo as vogais dentro de palavras com outros números', () => {
  test('se as demais letras e números não são convertidas', () => {
    expect(encode('123baeciodu')).toBe('123b12c34d5');
  });
});

describe('Testando o retorno da função', () => {
  test('se o tamanho da string retornada pela função tem o mesmo número de caracteres do parâmetro passado', () => {
    expect(encode('123baeciodu')).toHaveLength(11);
  });
});