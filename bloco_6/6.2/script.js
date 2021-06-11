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

// Biblioteca para Data
let day = new Pikaday({ field: document.getElementById('datepicker') });

//Biblioteca de Validação
new window.JustValidate('.form', {
  // options here
});

new window.JustValidate('.form', {
  Rules: {
    email: {
        required: true,
        email: true
    },
    name: {
        required: true,
        minLength: 3,
        maxLength: 20
    },
    text: {
        required: true,
        maxLength: 1000,
        minLength: 5
    }
  }
});

new window.JustValidate('.form', {
  Messages: {
    required: 'The field is required',
    email: 'Please, type a valid email',
    maxLength: 'The field must contain a maximum of :value characters',
    minLength: 'The field must contain a minimum of :value characters',
  },
});

new window.JustValidate('.form', {
  colorWrong: "#B81111"
});