function techList(tecnologias, nome) {
  const techs = tecnologias.sort();
  let obj = [];

  if(techs.length === 0) return 'Vazio!';

  for (let i = 0; i < techs.length; i++) {
    const objeto = {
      tech: techs[i],      
      name: nome
    }
    obj.push(objeto);
  }  
  return obj;
};

module.exports = techList;