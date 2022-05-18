const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.be' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

const newPlayers = (array) => {
  return array.reduce((acc, curr) => {
    acc[curr.fullName] = curr.email;
    return acc;
  }, {});
};

console.log(newPlayers(players))