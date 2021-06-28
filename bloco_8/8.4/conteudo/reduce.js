// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce . 
const numbers = [50, 85, -30, 3, 15];

// USANDO FOR
const bigger = (arr) => {
  let biggerNumber = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > biggerNumber) {
      biggerNumber = arr[index];
    }
  }
  return biggerNumber;
}
console.log(bigger(numbers));

// USANDO RECUDE
const biggestNumber = numbers.reduce((big, number) => (big > number) ? big : number);

console.log(biggestNumber);

// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array: Tente criar uma usando reduce e filter , e outra apenas usando reduce .
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// USANDO REDUCE E FILTER