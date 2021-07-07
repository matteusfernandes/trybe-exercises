const divResult = (number) => {
  newArr = [2, 3, 5, 10];
  return newArr.map((value) => number/value);
};
const sum = (numbers) => numbers.reduce((total, current) => total + current); 

const generateNumbers = () => {
  const result = [];
  for ( let index = 0; index <= 10; index += 1) {
    result.push(Math.pow(Math.floor(Math.random() * 50) + 1, 2));
  }
  return result;
}

const generateArr = () => {
  const numbers = generateNumbers();
  const result = sum(numbers);
  
  if (result >= 8000) {
    throw new Error();
  } 
  return result;
};

const myFetchPromise = async () => {
  try {
    const promise = await generateArr();
    const newPromise = await sum(promise);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

myFetchPromise();