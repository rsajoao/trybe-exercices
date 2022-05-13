const verificacao = (number) => {
  const numeroSorteado = Math.ceil(Math.random() * 5);
  if (number === numeroSorteado) {
    return `O número sorteado foi ${numeroSorteado} e o número apostado foi ${number}. Parabéns, você ganhou!`;
  } else {
    return `O número sorteado foi ${numeroSorteado} e o número apostado foi ${number}. Tente novamente.`;
  }
}

const sorteio = (number, anotherfunction) => {
  return anotherfunction(number)
}

const result = sorteio(3, verificacao);
console.log(result);
