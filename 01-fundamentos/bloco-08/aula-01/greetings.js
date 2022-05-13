const defaultGreetings = (who) => {
  return `Olá ${who}, tudo bem?`
};

const countryGreetings = (who) => {
  return `Batarde, ${who}, cê ta bão cumpadi?`;
};

const broGreetings = (who) => {
  return `E aí, ${who}, firmeza, mano?`
}

const greetingRods = (callback) => {
  const who = 'Rods';
  return callback(who);
}


let message = greetingRods(broGreetings);
console.log(message);

module.exports = { defaultGreetings, countryGreetings, broGreetings, greetingRods }