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

//Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.querySelector('.center-content');
let newParagraph = document.createElement('p');
newParagraph.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
paragraph.appendChild(newParagraph);
