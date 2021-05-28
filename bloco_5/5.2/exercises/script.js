// Função que cria título h1,h2,h3... recebendo como parâmentro a tag e o conteúdo.
function newTitle(tag, text) {
  let title = document.createElement(tag);
  title.innerText = text;
  return title;
}

//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a classe title na tag h1 criada;
document.body.appendChild(newTitle('h1', 'Exercício 5.2 - JavaScript DOM como filho da tag body'));
document.querySelector('body h1').className = 'title';

// Função para criar novas Div's recebendo como parâmetro uma sting com o nome da classe
function newDiv(classe) {
  let newDiv = document.createElement('div');
  newDiv.className = classe;
  return newDiv;
}

//Adicione a tag div com a classe main-content como filho da tag body ;
document.body.appendChild(newDiv('main-content'));

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
document.querySelector('.main-content').appendChild(newDiv('center-content'));
document.querySelector('.center-content').style.backgroundColor = 'green';

//Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let newParagraph = document.createElement('p');
newParagraph.innerText = 'Lorem Ipsum is simply dummy text.';
document.querySelector('.center-content').appendChild(newParagraph);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
document.querySelector('.main-content').appendChild(newDiv('left-content'));

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione a classe description nas 3 tags h3 criadas;
// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
document.querySelector('.main-content').appendChild(newDiv('right-content'));
document.querySelector('.main-content').appendChild(newTitle('h3', 'Título h3'));
document.querySelector('.main-content').appendChild(newTitle('h3', 'Título h3'));
document.querySelector('.main-content').appendChild(newTitle('h3', 'Título h3'));
for (let index = 0; index < document.querySelectorAll('h3').length; index += 1) {
  document.querySelectorAll('h3')[index].className = 'description';
}
document.querySelector('.right-content').style.marginRight = 'auto';


// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200';
newImg.className = 'small-image'
document.querySelector('.left-content').appendChild(newImg);
document.querySelector('.left-content').remove();


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

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
document.querySelector('ul').lastElementChild.remove();
document.querySelector('ul').lastElementChild.remove();
