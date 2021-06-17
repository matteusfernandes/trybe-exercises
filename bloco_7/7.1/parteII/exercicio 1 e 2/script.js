// EXERCICIO 1

// Forma complexa

const factorial = (number) => {
  const n = number;
  for (let index = 1; index < n; index += 1){
    number = (number * index); 
  }
  return number;
}

// Forma "fácil"

const factorial = (number) => ( number > 1 ) ? number * factorial(number - 1) : number;

// ***********************************************************

// EXERCICIO 2

const bigestWorld = (phrase) => {
  let arrayStr = phrase.split(" ");
  let maior = 0;
  let palavra = null;
  for (let key of arrayStr) {
    if (maior < key.length) {
        maior = key.length;
        palavra = key;
    }
  }
  return palavra;
}
console.log(bigestWorld('Antônio foi no banheiro e não sabemos o que aconteceu'));
