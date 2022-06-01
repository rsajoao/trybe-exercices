const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}.`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}.`;

const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return param(userToReturn);
};

console.log(getUser(userFullName)); // Hello! My name is Ivan Ivanovich.
console.log(getUser(userNationality)); // Ivan is Russian.
