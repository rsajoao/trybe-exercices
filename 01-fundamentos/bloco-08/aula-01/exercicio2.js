const verificacao = (number) => {
  const numeroSorteado = Math.floor(Math.random() * 6);
  if (number === numeroSorteado) {
    console.log(numeroSorteado);
    return `Parabéns! Você ganhou!`;
  } else {
    console.log(numeroSorteado);
    return `Tente novamente.`;
  }; 
};

const sorteio = (number, anotherfunction) => {
  return anotherfunction(number);
};

const result = sorteio(3, verificacao);
console.log(result);