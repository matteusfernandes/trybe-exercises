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

