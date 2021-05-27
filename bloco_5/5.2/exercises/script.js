//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let newTitle = document.createElement('h1');
newTitle.innerText = ('Exercício 5.2 - JavaScript DOM como filho da tag body');
document.body.appendChild(newTitle);

//Adicione a tag div com a classe main-content como filho da tag body ;
function newDiv(classe) {
  let newDiv = document.createElement('div');
  newDiv.className = classe;
  return newDiv;
}

document.body.appendChild(newDiv('main-content'));

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let mainContent = document.querySelector('.main-content');
let centerContent = newDiv('center-content');
mainContent.appendChild(centerContent);