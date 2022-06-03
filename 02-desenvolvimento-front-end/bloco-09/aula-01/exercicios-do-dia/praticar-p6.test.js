const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const { getPokemonDetails } = require("./praticar-p6");

describe('Testa se a função getPokemonDetails...', () => {
    test('imprime corretamente os valores desejados para um filtro válido de pokémon', (done) => {

        const expected = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`

        function callback(err, result) {
            try {
                expect(result).toBe(expected);
                done();
            } catch(error) {
                done(error);
            }
        }
        getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
    });

    test('imprime corretamente a mensagem de erro para um filtro inválido de pokémon', (done) => {
        const errorMessage = new Error ('Não temos esse pokémon para você :(');

        function callback(err, result) {
            try {
                expect(err).toEqual(errorMessage);
                done();
            } catch (error) {
                done(error);
            }
        }
        getPokemonDetails((pokemon) => pokemon.name === 'Naruto', callback);
    });
});