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
document.querySelector('.main-content').appendChild(newDiv('center-content'));

//Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let newParagraph = document.createElement('p');
newParagraph.innerText = 'Lorem Ipsum is simply dummy text.';
document.querySelector('.center-content').appendChild(newParagraph);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
document.querySelector('.main-content').appendChild(newDiv('left-content'));

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
document.querySelector('.main-content').appendChild(newDiv('right-content'));
