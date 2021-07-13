const { myFizzBuzz } = require('../src/myFizzBuzz');

describe('A função myFizzBuzz(num) recebe um número num e retorna uma string de acordo com os divisores do número passado', () => {
  it('Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('Faz uma chamada com um número divisível por 3 e verifica se o retorno é "fizz"', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  it('Faz uma chamada com um número divisível por 5 e verifica se o retorno é "buzz"', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('Faz uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o próprio número', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

  it('Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é false', () => {
    expect(myFizzBuzz('1')).toEqual(false);
  });
});