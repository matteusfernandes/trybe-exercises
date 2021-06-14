//Exercicio 5

/*let n = 7;
let temp = "";

for (index = n; index > 0; index -= 1) {
  if (index === 7){
    for (let indexSecond = 0; indexSecond < n; indexSecond += 1) {
      temp += "*";
    }
    console.log(temp);
    temp = "";
  
  } else if (n % 2 != 0 || n === 1) {
    for (let indexThird = index; indexThird > 0; indexThird -= 1) {
      if (indexThird % 2 === 0) {
        temp += "*";
      }
      temp += " ";
    }
  } else {
    temp = "";
    console.log (temp);
  }
  console.log(temp);
  temp = "";
}*/

//Exercicio 6

number = 20;
numberOfDivisors = 0;
isOdd = true;

if (number === 1){
  isOdd = false;
} else {
  for (let index = 0; index <= number; index += 1) {
    if (number % index === 0) {
      numberOfDivisors += 1;
    }
  }
  if (numberOfDivisors > 2){
    isOdd = false;
  }
}

console.log(isOdd);