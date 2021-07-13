const { decode } = require('../src/decode');

describe('Se "decode" é uma função', () => {
  test('se encode está declarada e é do tipo função', () => {
    expect(decode).toBeDefined();
    expect(typeof decode).toBe('function');
  });
});

describe('Convertendo os números 1, 2, 3, 4, 5', () => {
  test('se os números 1, 2, 3, 4, 5 são convertidas em a, e, i, o, u respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('se os números 5, 4, 3, 2, 1 são convertidas em u, o, i, e, a respectivamente', () => {
    expect(decode('54321')).toBe('uoiea');
  });
});

describe('Convertendo os números em vogais dentro de palavras', () => {
  test('se as demais letras não são convertidas', () => {
    expect(decode('1bcd2fgh3jklmn4pq5')).toBe('abcdefghijklmnopqu');
  });
});

describe('Convertendo os números dentro de palavras com outros números', () => {
  test('se as demais letras e números não são convertidas', () => {
    expect(decode('678b12c34d5')).toBe('678baeciodu');
  });
});

describe('Testando o retorno da função', () => {
  test('se o tamanho da string retornada pela função tem o mesmo número de caracteres do parâmetro passado', () => {
    expect(decode('678b12c34d5')).toHaveLength(11);
  });
});