//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let newTitle = document.createElement('h1');
newTitle.innerText = ('Exercício 5.2 - JavaScript DOM como filho da tag body');
document.body.appendChild(newTitle);

//Adicione a tag div com a classe main-content como filho da tag body ;
let newDiv = document.createElement('div');
newDiv.className = 'main-content';
document.body.appendChild(newDiv);
