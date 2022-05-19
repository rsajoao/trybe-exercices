// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos;

const sum = (...numbers) => numbers.reduce((soma, numero) => soma + numero);

console.log(sum(5, 6, 50, 39));