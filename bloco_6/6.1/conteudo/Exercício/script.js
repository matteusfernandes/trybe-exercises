// Objeto com os estados do Brasil
statesOfBrazil = [{name: 'Acre', abv: 'ac'}, 
{name: 'Alagoas', abv: 'al'},
{name: 'Amapá', abv: 'ap'},
{name: 'Amazonas', abv: 'am'},
{name: 'Bahia', abv: 'ba'},
{name: 'Ceará', abv: 'ce'},
{name: 'Espírito Santo', abv: 'es'},
{name: 'Goiás', abv: 'go'},
{name: 'Maranhão', abv: 'ma'},
{name: 'Mato Grosso', abv: 'mt'},
{name: 'Mato Grosso do Sul', abv: 'ms'},
{name: 'Minas Gerais', abv: 'mg'},
{name: 'Pará', abv: 'pa'},
{name: 'Paraíba', abv: 'pb'},
{name: 'Paraná', abv: 'pr'},
{name: 'Pernambuco', abv: 'pe'},
{name: 'Piauí', abv: 'pi'},
{name: 'Rio de Janeiro', abv: 'rj'},
{name: 'Rio Grande do Norte', abv: 'rn'},
{name: 'Rio Grande do Sul', abv: 'rs'},
{name: 'Rondônia', abv: 'ro'},
{name: 'Roraima', abv: 'rr'},
{name: 'Santa Catarina', abv: 'sc'},
{name: 'São Paulo', abv: 'sp'},
{name: 'Sergipe', abv: 'se'},
{name: 'Tocantins', abv: 'to'},
{name: 'Distrito Federal', abv: 'df'}];

// Função para gerar os estados
function generateAllStatesNames() {
  const states = document.querySelector('#states');
  for (let key in statesOfBrazil) {
    const newState = document.createElement('option');
    newState.innerText = statesOfBrazil[key].name;
    newState.value = statesOfBrazil[key].abv;
    states.appendChild(newState);
  }
}
generateAllStatesNames();

// Função que Verifica se o dia é válido
function validDay(dayToValid) {
  if (dayToValid > 0 && dayToValid <= 31) {
    return true;
  } else {
    return false;
  }
}

// Função que Verifica se o mês é válido
function validMonth(monthToValid) {
  if (monthToValid > 0 && monthToValid <= 12) {
    return true;
  } else {
    return false;
  }
}

// Função para separar dia, mês e ano e chamar verificações
function setTheDate() {
  const date = document.querySelector('#start-date');
  let dateIsValid = true;
  
  if (date.value.length === 8) {
    const dateString = String(date.value);
    const day = dateString[0] + dateString[1];
    
    // Verifica se o Dia é válido
    const verifyDay = validDay(day);
    const month = dateString[2] + dateString[3];
    const verifyMonth = validMonth(month);
    let year = '';
    for (let index = 4; index < dateString.length; index += 1) {
      year += dateString[index];
    }
    if (verifyDay === false) {
      alert('Dia inválido!');
      dateIsValid = false;
      return dateIsValid;
    }
    if (verifyMonth === false){
    // Verifica se o mês é válido
      alert('Mês inválido!');
      dateIsValid = false;
      return dateIsValid;
    }
    if (parseInt(year) < 0) {
      alert('Ano inválido');
      dateIsValid = false;
      return dateIsValid;
    }
  }
}

// Função para checar se o nome foi digitado
function checkName() {
  const fullName = document.getElementById('full-name').value;

  if (fullName.length > 0 && fullName.length <= 40) {
    return true;
  } else {
    return false;
  }
}

// Função para checar se o email é válido
function checkEmail() {
  const email = document.getElementById('email').value;
  let validEmail = false;
  if (email.length > 0 && email.length <= 50) {
    for (let key in email) {
      if (email[key] === '@') {
        validEmail = true;
      }
    }
    return validEmail;
  }
  return validEmail;
}

// Função para checar se o cpf é válido
function checkCpf() {
  const validCpf = document.getElementById('cpf-number').value;
  if (validCpf.length > 0 && validCpf.length <= 11) {
    return true;
  } else {
    return false;
  }
}

// Função para checar se o endereço é válido
function checkAdress() {
  const adress = document.getElementById('full-adress').value;
  if (adress.length > 0 && adress.length <= 200) {
    return true;
  } else {
    return false;
  }
}

// Função para checar se a cidade é válida
function checkCity() {
  const city = document.getElementById('city-input').value;

  if (city.length > 0 && city.length <=28) {
    return true;
  } else {
    return false;
  }
}

// Função que interrompe o fluxo automático do form
const btnSend = document.querySelector('#send-button');
btnSend.addEventListener('click', function (event) {
  event.preventDefault();
  validadeData();
});

// Função que inicia o processo de validação
function validadeData() {
  setTheDate();
  checkName();
  checkEmail();
  checkCpf();
  checkAdress();
  checkCity();
}