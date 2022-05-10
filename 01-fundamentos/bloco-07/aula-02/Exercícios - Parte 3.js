const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNewKey = (objeto, chave, valor) => {
  objeto[chave] = valor;
};
addNewKey(lesson2, "turno", "noite");
console.log(lesson2["turno"]);

const listKeys = (objeto) => Object.keys(objeto);
console.log(listKeys(lesson3));

const sizeObj = (objeto) => Object.keys(objeto).length;
console.log(sizeObj(lesson1));

const listValues = (objeto) => Object.values(objeto);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.table(allLessons);

const getNumbersOfStudents = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(
  `O número total de estudantes é: ${getNumbersOfStudents(
    allLessons
  )} estudantes.`
);

const getValueByNumber = (objeto, chave) => {
  const array = Object.values(objeto);
  return array[chave];
};
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (objeto, chave, valor) => {
  const arr = Object.entries(objeto);
  console.log(arr);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === chave && arr[index][1] === valor) isEqual = true;
  }
  return isEqual;
};

console.log(verifyPair(lesson2, "professor", "Carlos"));
