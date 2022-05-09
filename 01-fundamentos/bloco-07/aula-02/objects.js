const quadrinho1 = {
  collection: 'Tio Patinhas',
  title: 'O tesouro dos dez avatares',
}

quadrinho1.author = 'Don Rosa'
quadrinho1.publishingCompany = 'Editora Abril'


// OBJECTS
// 1 - Keys
// console.log((Object.keys(quadrinho1).includes('author')));
// console.log(typeof(Object.keys(quadrinho1)));
// console.log(Array.isArray(Object.keys(quadrinho1)));

// 2 - Values
console.log(Object.values(quadrinho1).includes('Don Rosa'));

// 3 - Entries

console.log(Object.entries(quadrinho1));