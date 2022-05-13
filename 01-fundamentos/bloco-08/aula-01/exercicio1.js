const createId = (name) => {
  const nameID = name.replace(/ /g, '_').toLowerCase();
  const email = `${nameID}@trybe.com`;
  const object = {
    name: name,
    email: email,
  };
  return object;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'), 
  };  
  return employees;
};  

const object = newEmployees(createId);
console.log(object);