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
  const date = document.querySelector('#start-date').value;
  let dateIsValid = true;
  
  if (date.length === 8) {

    // Monta o Dia
    const dateString = String(date);
    const day = dateString[0] + dateString[1];
    
    // Verifica se o Dia é válido
    const verifyDay = validDay(day);

    // Monta o Mês e verifica se é válido
    const month = dateString[2] + dateString[3];
    const verifyMonth = validMonth(month);

    // Monta o Ano
    let year = '';
    for (let index = 4; index < dateString.length; index += 1) {
      year += dateString[index];
    }

    // Verificações Gerais e retorno
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
    return dateIsValid;
  }
  dateIsValid = false;
  return dateIsValid;
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
  const city = document.getElementById('city').value;

  if (city.length > 0 && city.length <=28) {
    return true;
  } else {
    return false;
  }
}

// Função para checar se o Resumo do Cargo é válido
function checkSummary() {
  const summary = document.getElementById('resume').value;

  if (summary.length > 0 && summary.length <= 1000) {
    return true;
  }
  return false;
}

// Função para checar se o cargo é válido
function checkJob() {
  const job = document.getElementById('office').value;

  if (job.length > 0 && job.length <= 40) {
    return true;
  }
  return false;
}

// Função para checar se a descrição do cargo é válida
function checkJobDescription() {
  const jobDescription = document.getElementById('description').value;

  if (jobDescription.length > 0 && jobDescription.length <= 500) {
    return true;
  }
  return false;
}

// Função pra montar o cpf
function makeACpf() {
  const cpfNumber = document.getElementById('cpf-number').value;
  const newNumber = cpfNumber.split('');
  newNumber.splice(3, 0, '.');
  newNumber.splice(7, 0, '.');
  newNumber.splice(11, 0, '-');
  return newNumber.join('');
}

// Função para checar qual complemento foi marcado
function checkComp() {
  const apt = document.getElementById('apt-type').checked;
  const house = document.getElementById('house-type').checked;
  let result = 'Apartamento';
  if (house === true) {
    result = 'Casa';
    return result;
  }
  return result;
}

// Função para montar a data
function assembleDate() {
  const dateNumber = document.getElementById('start-date').value;
  const newAssembleDate = dateNumber.split('');
  newAssembleDate.splice(2, 0, '/');
  newAssembleDate.splice(5, 0, '/');
  return newAssembleDate.join('');
}

// Função que Monta o conteúdo interno da Div
function innerElements() {
  // Nome, E-mail, CPF, Endereço, Cidade, Estado, Casa, Resumo, Cago Anterior, Descrição do Cargo, Data
  const finalDiv = document.getElementById('final-form');
  // Nome
  const fullName = document.createElement('p');
  fullName.innerText = ('Nome: ' + document.getElementById('full-name').value);
  fullName.className = "line-content";
  finalDiv.appendChild(fullName);

  //E-mail
  const email = document.createElement('p');
  email.innerText = ('E-mail: ' + document.getElementById('email').value);
  email.className = 'line-content';
  finalDiv.appendChild(email);

  // CPF
  const cpf = document.createElement('p');
  cpf.innerText = ("CPF: " + makeACpf());
  cpf.className = 'line-content';
  finalDiv.appendChild(cpf);

  // Endereço
  const adress = document.createElement('p');
  adress.innerText = ('Endereço: ' + document.getElementById('full-adress').value);
  adress.className = 'line-content';
  finalDiv.appendChild(adress);

  // Cidade
  const city = document.createElement('p');
  city.innerText = ('Cidade: ' + document.getElementById('city').value);
  city.className = 'line-content';
  finalDiv.appendChild(city);

  // Estado
  const state = document.createElement('p');
  const nameOfState = document.getElementById('states').value;
  state.innerText = ('Estado: ' + nameOfState.toUpperCase());
  state.className = 'line-content';
  finalDiv.appendChild(state);

  //Complemento
  const comp = document.createElement('p');
  comp .innerText = ('Complemento: ' + checkComp());
  comp.className = 'line-content';
  finalDiv.appendChild(comp);

  //Resumo do Currículo
  const summary = document.createElement('div');
  summary.innerText = ('Resumo do Currículo: ' + document.getElementById('resume').value);
  summary.className = 'line-content';
  finalDiv.appendChild(summary);

  // Último cargo ocupado
  const job = document.createElement('p');
  job.innerText = ('Último Cargo Ocupado: ' + document.getElementById('office').value);
  job.className = 'line-content';
  finalDiv.appendChild(job);
  
  // Descrição do último cargo ocupado
  const jobDescription = document.createElement('p');
  jobDescription.innerText = ('Descrição do Cargo: ' + document.getElementById('description').value);
  jobDescription.className = 'line-content';
  finalDiv.appendChild(jobDescription);

  // Data de início
  const initialDate = document.createElement('p');
  initialDate.innerText = ("Data de Início: " + assembleDate());
  initialDate.className = 'line-content';
  finalDiv.appendChild(initialDate);

  // Cria Botão de Submmit
  const btnSubmmit = document.createElement("button");
  btnSubmmit.innerText = 'Enviar';
  btnSubmmit.type = 'submmit';
  finalDiv.appendChild(btnSubmmit);
  

  // Cria Botão de Limpar
  const btnClear = document.createElement("button");
  btnClear.innerText = 'Limpar Formulário';
  finalDiv.appendChild(btnClear);

  btnClear.addEventListener('click', function() {
    const mainContent = document.getElementById('main-content');
    mainContent.firstElementChild.remove();
  });
}

// Função para montar a Div com o resultado do form
function formResult(result) {
  const formIsValid = result;

  if (formIsValid === true) {
    const mainContent = document.getElementById('main-content');
    const newContent = document.createElement('div');
    newContent.id = 'final-form';
    mainContent.appendChild(newContent);
    innerElements();
    mainContent.firstElementChild.remove();
  } else {
    const mainContent = document.getElementById('main-content');
    mainContent.firstElementChild.remove();
    const newContent = document.createElement('div');
    newContent.innerText = 'O FORMULÁRIO CONTÉM DADOS INVÁLIDOS!';
    mainContent.appendChild(newContent);
  }
}

// Função que interrompe o fluxo automático do form
const btnSend = document.querySelector('#send-button');
btnSend.addEventListener('click', function (event) {
  event.preventDefault();
  const validForm = validadeData();
  formResult(validForm);
});

// Função que inicia o processo de validação
function validadeData() {
  return setTheDate() && checkName() && checkEmail() && checkCpf() && checkAdress() && checkCity() && checkSummary() && checkJob() && checkJobDescription();
}