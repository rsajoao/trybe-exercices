function hydrate(string) {
  let reg = /\d+/g;
  let result = string.match(reg);
  let coposDagua = 0;

  for(let i = 0; i < result.length; i++) {
    coposDagua += parseInt(result[i]);
  }

  if(coposDagua === 1) {
    return('1 copo de água')
  } else {
    return(`${coposDagua} copos de água`)
  }

}


module.exports = hydrate;