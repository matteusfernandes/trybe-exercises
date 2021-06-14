// Conteúdo Parte I
document.getElementById('elementoOndeVoceEsta').style.color = 'Red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro Filho do Filho';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').nextSibling;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').lastElementChild.previousElementSibling;

// Conteúdo Parte II
let newBrother = document.querySelector('#pai');
let brother = document.createElement('div');
brother.innerText = "Irmão mais Novo";
newBrother.appendChild(brother);

let newChild = document.querySelector('#elementoOndeVoceEsta');
let child = document.createElement('div');
child.innerText = "Filho caçula";
newChild.appendChild(child);

let firstGrandChild = document.querySelector('#primeiroFilhoDoFilho');
let grandChild = document.createElement('div');
grandChild.innerText = "Primeiro Netinho";
firstGrandChild.appendChild(grandChild);

document.querySelector('#primeiroFilhoDoFilho div').parentNode.parentNode.nextElementSibling;

// Conteúdo Parte III
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho . removeChild.removeChild(rmv);

let dad = document.getElementById('pai');

for (let index = dad.childNodes.length - 1; index >= 0; index -= 1) {
  let currentChild = dad.childNodes[index];
  if (currentChild.id !== "elementoOndeVoceEsta") {
    currentChild.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();