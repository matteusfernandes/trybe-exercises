//Exercício 1

let n = 5;

for (let index = 0; index < n; index += 1){
  let temp = "";
  for (let indexSecond = 0; indexSecond < n; indexSecond += 1){
    temp += "*"; 
  }
  console.log(temp);
}
