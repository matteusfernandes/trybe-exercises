function amendParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let key in paragraphs) {
    paragraphs[key].innerText = 'Lorem Ipsum';
  }
}
function changeColorSides() {
  let colorSides = document.getElementsByClassName('main-content');
  for (let key in colorSides){
    colorSides[key].style.backgroundColor = 'rgb(76 164 109)';  
  } 
}

function changeColorCenter() {
  let colorCenter = document.getElementsByClassName('center-content');
  for (let key in colorCenter){
    colorCenter[key].style.backgroundColor = 'white';  
  } 
}

function correctMainTitle(newTitle) {
  let title = document.getElementsByTagName('h1');
  title[0].innerText = newTitle;
}

/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */