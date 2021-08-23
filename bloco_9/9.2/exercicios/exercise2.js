const promise = new Promise((resolve, reject) => {
  const numbers = [];
  for ( let index = 0; index <= 10; index += 1) {
    numbers.push(Math.pow(Math.floor(Math.random() * 50) + 1, 2));
  }

  const result = numbers.reduce((total, currentValue) => total + currentValue);

  if(result < 8000) {
    return resolve();
  }
  reject();
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));