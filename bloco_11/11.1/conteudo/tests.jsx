// Teste 1
// const nome = 'Jorge Maravilha';
// const element = <h1>Hello, {nome}</h1>;

// Teste 2
function nomeCompleto (nome, sobronome) {
  return `${nome} ${sobronome}`;
}

const element = <h1>Hello, {nomeCompleto('Jorge', 'Maravilha')}</h1>;

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const container = <div>{element}</div>;

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;