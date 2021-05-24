//Exercício 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}
//Exercício 2

let somaTotal = 0;

for (let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1){
  somaTotal += numbers[indexSoma];
}

console.log("A soma de todos os elementos do Array é igual a: " + somaTotal);

//Exercício 3

let media = somaTotal / numbers.length;

console.log("A média aritimética dos valores é: " + media);

//Exercício 4

if (media > 20){
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

//Exercício 5

let maiorValor = 0;

for (let indexMaior = 0; indexMaior < numbers.length; indexMaior += 1){
  if (numbers[indexMaior] > maiorValor){
    maiorValor = numbers[indexMaior];
  }
}
console.log("O maior valor é: " + maiorValor);

//Exercício 6

let oddAmount = 0;

for (let indexOdd = 0; indexOdd < numbers.length; indexOdd += 1){
  if (numbers[indexOdd] % 2 === 0){
    oddAmount += 1;
  }
}
console.log("A quantidade de números ímpar é: " + oddAmount);

//Exercício 7

let menorValor = numbers[0];

for (let indexMenor = 0; indexMenor < numbers.length; indexMenor += 1){
  if (numbers[indexMenor] < menorValor){
    menorValor = numbers[indexMenor];
  }
}
console.log("O menor valor é: " + menorValor);