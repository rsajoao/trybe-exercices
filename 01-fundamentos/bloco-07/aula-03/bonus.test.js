const searchEmployee = require('./bonus');

describe('Testa a função searchEmployee', () => {
  test('Testa se seachEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('Testa o retorno para uma ID existente e o detail "firstname"', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
  });
  test('Testa se searchEmployee(id, "lastName") retorna o sobrenome do usuário da ID', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
  test('Teste para searchEmployee(id, "specialities") retorna o array com as habilidades da pessoa do ID', () => {
    expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  test('Testa se um erro é enviado quando a ID inserida não é reconhecida', () => {
    expect(() => {searchEmployee('1234-5', 'specialities')}).toThrow();
  });
  test('Testa a mensagem do erro da ID inexistente', () => {
    expect(() => {searchEmployee('1234-5', 'specialities')}).toThrowError(new Error('Id não identificada'));
  });
  test('Testa se um erro é lançado quando a informação é inexistente', () => {
    expect(() => {searchEmployee('1256-4', 'salary')}).toThrow();
  });
  test('Testa a mensagem do erro de informação inexistente', () => {
    expect(() => {searchEmployee('1256-4', 'salary')}).toThrowError(new Error('Informação indisponível'));
  });
  test('Testa se há um erro quando a informação e o ID são inexistentes', () => {
    expect(() => {searchEmployee()}).toThrow();
  });
});