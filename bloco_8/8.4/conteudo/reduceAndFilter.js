// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array: Tente criar uma usando reduce e filter , e outra apenas usando reduce .
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// USANDO REDUCE E FILTER
const sumEvenWithFilterAndReduce = (arr) => {
  return arr.filter((number) => (number % 2 === 0)).reduce((result, number) => result + number);
};
console.log(sumEvenWithFilterAndReduce(numbers));

// USANDO REDUCE
const sumEvenWithReduce = (arr) => arr.reduce((result, number) => (number % 2 === 0) ? result + number : result);
console.log(sumEvenWithReduce(numbers));
