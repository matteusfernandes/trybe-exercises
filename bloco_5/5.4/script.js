// Função para implementar novos elementos
function newElement(type, text, dad) {
  let element = document.createElement(type);
  element.innerText = text;
  dad.document.appendChild(element);
}
