const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = (books) => books.find((book) => book.author.birthYear === 1947);
console.log(`O autor nascido em 1947 foi ${authorBornIn1947(books).author.name}.`);

// 2. Retorne o nome do livre de menor nome
const smallerName = (books) => {
  let smaller = books[0];

  books.forEach((book) => {
    if (book.name.length < smaller.name.length) {
      smaller = book;
    }
  });
  return smaller;
}
console.log(`O livro que possui o menor título é ${smallerName(books).name}.`);

// 3. Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNamedBook = books => books.find(book => book.name.length === 26);
console.log(`'${getNamedBook(books).name}' foi o primeiro resultado cujo título do livre possui exatamente 26 caracteres.`);

// 4. Ordene os livros por data de lançamento em ordem decrescente
const booksOrderedByReleaseYearDesc = (books) => books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
console.log(booksOrderedByReleaseYearDesc(books)); // [!] SÓ CONSEGUI COM O GABARITO. ESTUDAR MAIS O MÉTODO .sort !!!!

// 5. Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário
const everyoneWasBornOnSecXX = (books) => books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2001);
if(everyoneWasBornOnSecXX(books) === false) {
  console.log(`Nem todos os autores nasceram no século XX. return ${everyoneWasBornOnSecXX(books)}.`);
} else {
  console.log(`Todos os autores nasceram no século XX. return ${everyoneWasBornOnSecXX(books)}.`);
};

// 6. Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário
const someBookWasReleaseOnThe80s = (books) => books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990);
if (someBookWasReleaseOnThe80s(books) === true) {
  console.log(`Há pelo menos um livro lançado na década de 80. return ${someBookWasReleaseOnThe80s(books)}`);
} else {
  console.log(`Nenhum livro na lista foi publicado na década de 80. ${someBookWasReleaseOnThe80s(books)}`);
};

// 7. Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = (books) => {
  return books.every((book) => 
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
};
console.log(authorUnique(books))
// TAMBÉM PRECISEI DO GABARITO, MAS ENTENDI MELHOR COMO FUNCIONA. [!]
