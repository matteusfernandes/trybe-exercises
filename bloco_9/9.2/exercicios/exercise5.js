const divResult = (number) => [number / 2, number / 3, number / 5, number / 10];

const generateNumbers = () => {
  const result = [];
  for ( let index = 0; index <= 10; index += 1) {
    result.push(Math.pow(Math.floor(Math.random() * 50) + 1, 2));
  }
  return result;
}

const sum = (numbers) => numbers.reduce((total, current) => total + current); 

const myFetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbers = generateNumbers();
    const result = numbers.reduce((total, currentValue) => total + currentValue);
    (result < 8000) ? resolve(divResult(result)) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
  });
  
  promise
    .then((retorno) => sum(retorno))
    .then((retorno) => console.log(retorno))
    .catch((error) => console.log(error));
};

myFetchPromise();