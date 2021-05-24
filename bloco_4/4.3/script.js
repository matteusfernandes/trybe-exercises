//Exercício 1

let n = 5;

for (let index = 0; index < n; index += 1){
  let temp = "";
  for (let indexSecond = 0; indexSecond < n; indexSecond += 1){
    temp += "*"; 
  }
  console.log(temp);
}

//Exercício 2

  let temp = "";
  for (let index = n; index > 0; index -= 1){
    temp += "*";
    console.log(temp);
  }

  //Exercício 3
  
  temp = "";
  temp1 = "";

  for (let index = n; index > 0; index -= 1){
    for (let indexSecond = index -1; indexSecond > 0; indexSecond -= 1){
      temp1 += " ";
    }
    temp += "*";
    console.log(temp1 + temp);
    temp1 = "";
  }
  
  //Exercício 4

temp = "";
temp1 = "";
temp2= "";

for (let index = n; index > 0; index -= 1){
  for (let indexSecond = (index -1) / 2; indexSecond > 0; indexSecond -= 1){
    temp1 += " ";
  }
  temp += "*";
  temp2 = temp1;
  if (index == 1 || index % 2 != 0){
    console.log(temp1 + temp + temp2);
  }
  temp1 = "";
}