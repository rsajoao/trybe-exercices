// 5. Dada o array de nomes, retorne a quantidade de vezes que aparecem a letra a maiúscula ou minúscula

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const contemA = (array) => {
  return array.reduce((A, palavra) => {
    return A += palavra.split('').reduce((a, letra) => {
      if (letra === 'a' || letra === 'A') return a += 1;
      return a;
    },0)
  },0)
}
console.log(contemA(names));