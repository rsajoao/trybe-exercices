const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparacao = (gabarito, respostas) => {
  let contagem = 0;

  for (let i in respostas){
    if (respostas[i] === gabarito[i]) {
      contagem += 1;
    } else if (respostas[i] === 'N.A') {
    } else {
      contagem -= 0.5;
    }
  }

  return contagem;

}

const correcao = (gabarito, respostas, comparacao) => {
  return `A sua contagem de pontos na prova foi ${comparacao(gabarito, respostas)}.`;
}

console.log(correcao(RIGHT_ANSWERS, STUDENT_ANSWERS, comparacao));
