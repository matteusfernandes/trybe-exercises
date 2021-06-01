// Declara variáveis dos containers do html
const head = document.querySelector('.head-container');
const main = document.querySelector('.main-container');
const colors = document.querySelector('.colors-display');
const body = document.querySelector('body');

// Função para implementar novos elementos
function newElement(type, text, dad) {
  console.log(type);
  console.log(text);
  console.log(dad);
  let element = document.createElement(type);
  element.innerText = text;
  dad.appendChild(element);
}

// POVOAMENTO DO HTML PELO JS

// Cria um título h1
newElement('h1','Lorem Ipsum',head);

// Cria um título h4
const subTitle = '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."';
newElement('h4', subTitle, head);

// Cira um título h2
let newTitle = "What is Lorem Ipsum";
newElement('h2', newTitle, main);

// Cria um parágrafo;
let paragraphText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
newElement('p', paragraphText, main);

// Cira um título h2
newTitle = "Why do we use it?";
newElement('h2', newTitle, main);

// Cria um parágrafo;
paragraphText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
newElement('p', paragraphText, main);

// Cria título para seletor de cor de fundo
newTitle = 'Escolha a cor de fundo da página:'
newElement('h3', newTitle, colors);

// FUNÇÃO PARA CRIAR CORES DE FUNDO DA PÁGINA
function newBackgroundColor(color) {
  let newColor = document.createElement('div');
  newColor.style.backgroundColor = color;
  newColor.className = ('background-color');
  document.querySelector('.colors-display').appendChild(newColor);
}
newBackgroundColor('black');
newBackgroundColor('white');
newBackgroundColor('green');
newBackgroundColor('yellow');

// FUNÇÃO PARA MUDAR A COR DE FUNDO DA PÁGINA
function changeBackgroundColor() {
  body.addEventListener('click', function(event){
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  });
}
changeBackgroundColor();