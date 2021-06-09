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