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

function newTurn(object, key, value) {
  object[key] = value;
}

newTurn(lesson2, 'turno', 'manhã');

function allKeys(object) {
  console.log(Object.keys(object));
}

function objectLength(object) {
  const objectToLength = Object.keys(object);
  console.log(objectToLength.length);
}

function objectValues(object) {
  for (index in object) {
    console.log(Object.values(object));
  }
}

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
};
console.log(allLessons);
