const { searchEmployee } = require('../src/searchEmployee');

describe('Test the function searchEmployee', () => {
  test('if searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('should return Ana', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  test('should return "ID não identificada"', () => {
    expect(searchEmployee('8579-65', 'firstName')).toBe('ID não identificada');
  });

  test('should return "Informação indisponível"', () => {
    expect(searchEmployee('8579-6', 'fullName')).toBe('Informação indisponível');
  });
});