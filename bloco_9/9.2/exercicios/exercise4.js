const divResult = (number) => [number / 2, number / 3, number / 5, number / 10];

const promise = new Promise((resolve, reject) => {
  const numbers = [];
  for ( let index = 0; index <= 10; index += 1) {
    numbers.push(Math.pow(Math.floor(Math.random() * 50) + 1, 2));
  }

  const result = numbers.reduce((total, currentValue) => total + currentValue);

  if(result < 8000) {
    resolve(divResult(result));
  }
  reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
.then((retorno) => console.log(retorno))
.catch((error) => console.log(error));