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
