const { sum, myRemove, myFizzBuzz } = require('./functions');

describe('Testes da função que soma números (Sum)', () => {
  test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Testa se o retorno para sum(4, "5") lança um erro', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});

describe('Testes da função que remove um item (myRemove)', () => {
  it('Testa se remove o 3 do array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Testa se a função recebe como parâmetros ([1, 2, 3, 4], 3) e #não# retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  if('Testa se a função recebe como parâmetros ([1, 2, 3, 4], 5) retorna o mesmo array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(1, 2 ,3, 4);
  });
});

describe('Testes da função fizzbuzz', () => {
  test('Testa se 45 é fizzbuzz', () => {
    expect(myFizzBuzz(45)).toBe('fizzbuzz');
  });
  test('Testa se 39 é fizz', () => {
    expect(myFizzBuzz(36)).toBe('fizz');
  });
  test('Testa se 65 é buzz', () => {
    expect(myFizzBuzz(65)).toBe('buzz');
  });
  test('Testa se um parâmetro com um número não divisível nem por 5 e nem por 3 retorna o próprio número', () => {
    expect(myFizzBuzz(77)).toBe(77);
  });
  test('Testa se um valor não numérico como parâmetro de myFizzBuzz retorna false', () => {
    expect(myFizzBuzz('quarenta')).toBe(false);
  });
});

