const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenarNumeros = (numeros) => {
  let numerosOrdenados = [];
    
  for (let i = 0; i < numeros.length; i++) {
    let index = 0;
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[j] < numeros[i]) {
        index++;
      }
    }
    numerosOrdenados[(index)] = numeros[i];
  }

  return numerosOrdenados;
}


console.log(`Os números ${ordenarNumeros(oddsAndEvens)} se encontram ordenados de forma crescente!`);
