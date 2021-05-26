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

function paragraphsUpperCase() {
  let paragraphs = document.getElementsByTagName('p');
  for (let key in paragraphs) {
    paragraphs[key].style.textTransform = 'uppercase';
  }
}

function paragraphsToConsole () {
  let paragraphs = document.getElementsByTagName('p');
  for (let key in paragraphs) {
    console.log(paragraphs[key]);
  }
}
