const { defaultGreetings, countryGreetings, broGreetings, greetingRods } = require('./greetings');

describe('The greetings functions', () => {
  it('returns the greeting message to Rods', () => {
    expect(greetingRods(defaultGreetings)).toBe('Olá Rods, tudo bem?');
  });
  it('returns the country greeting message to Rods', () => {
    expect(greetingRods(countryGreetings)).toBe('Batarde, Rods, cê ta bão cumpadi?');
  });
});