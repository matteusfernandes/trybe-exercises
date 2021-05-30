function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.
function createDaysList() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for (let key in dezDaysList) {
    let day = dezDaysList[key];
    let dayList = document.createElement('li');
    dayList.innerText = day;
    if (dayList.innerText === '24' || dayList.innerText === '31') {
      dayList.className = 'day holiday';
    } else if (dayList.innerText === '4' || dayList.innerText === '11' || dayList.innerText === '18') {
      dayList.className = 'day friday';
    } else if (dayList.innerText === '25'){
      dayList.className = 'day friday holiday';
    } else {
      dayList.className = 'day';
    }
    document.querySelector('#days').appendChild(dayList); 
  }
}
createDaysList();

// Segunda Função
function createButton(text) {
  let button = document.createElement('button');
  button.innerText = text;
  button.id = 'btn.holiday';
  document.querySelector('.buttons-container').appendChild(button);
}
createButton('Feriados');

// Terceira Função
const holidays = document.querySelectorAll('.holiday');
const btnHoliday = document.getElementById('btn.holiday');

function colorHolidaysOn() {
  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = 'yellow';
  }
}

function colorHolidaysOff() {
  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = 'rgb(238 238 238)';
  }
}

btnHoliday.addEventListener('click', function() {
  let actualColor =  holidays[0].style.backgroundColor;
  if (actualColor === 'yellow') {
    colorHolidaysOff();
  } else {
    colorHolidaysOn();
  }
});

// Quarta Função
createButton('Sexta-feira');
const friday = document.querySelector('.buttons-container').firstElementChild.nextElementSibling;
friday.id = 'btn-friday';
