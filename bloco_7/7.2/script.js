const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function newTurn(object, key, value) {
  object[key] = value;
}
newTurn(lesson2, 'turno', 'manhã');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function allKeys(object) {
  console.log(Object.keys(object));
}

// Crie uma função para mostrar o tamanho de um objeto.
function objectLength(object) {
  const objectToLength = Object.keys(object);
  console.log(objectToLength.length);
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function objectValues(object) {
  for (index in object) {
    console.log(Object.values(object));
  }
}

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas
function numberOfStudents(object) {
  let total = 0;
  const actualKey = Object.keys(object);
  for (index in actualKey) {
    total += object[actualKey[index]].numeroEstudantes;
  }
  return total;
};

