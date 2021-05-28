// Função que cria título h1,h2,h3... recebendo como parâmentro a tag e o conteúdo.
function newTitle(tag, text) {
  title = document.createElement(tag);
  title.innerText = (text);
  return title;
}

//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
document.body.appendChild(newTitle('h1', 'Exercício 5.2 - JavaScript DOM como filho da tag body'));

// Função para criar novas Div's recebendo como parâmetro uma sting com o nome da classe
function newDiv(classe) {
  let newDiv = document.createElement('div');
  newDiv.className = classe;
  return newDiv;
}

//Adicione a tag div com a classe main-content como filho da tag body ;
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

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200';
newImg.className = 'small-image'
document.querySelector('.left-content').appendChild(newImg);

// Função que cria Li's recebendo como parâmento uma string contento os itens da lista
function newUlList(itens) {
  for (let index = 0; index < itens.length; index += 1){
    let listItem = itens[index];
    let inputLi = document.createElement('li');
    inputLi.innerText = listItem;
    document.querySelector('ul').appendChild(inputLi);
  }
}

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let newList = document.createElement('ul');
document.querySelector('.right-content').appendChild(newList);
let itens = ['1','2','3','4','5','6','7','8','9','10'];
document.querySelector('ul').appendChild(newUlList(itens));

// function 

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
