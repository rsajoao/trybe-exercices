const quadrinho2 = {
  collection: 'Sherlock Holmes',
  title: 'O cão dos Baskervilles'
}

const objetoAutor = {
  author: 'Rich Burlew',
  collection: 'Sherlock Holmes - Return'
}

//console.log(DESTINO)
// console.log(Object.assign(quadrinho2, objetoAutor));

const cloneDequadrinho2 = Object.assign({}, quadrinho2, objetoAutor);

console.log(quadrinho2);
console.log(cloneDequadrinho2);