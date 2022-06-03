const { expect } = require("expect");
const { uppercase } = require("./praticar-p5")

describe("Verifica se a função 'uppercase'", () => {
    test("possui uma callback que transforma as letras de uma plavra em letras maiúsculas.", (done) => {
        function callback(content) {
            try {
                expect(content).toBe('STRING DE TESTE');
                done();                
            } catch (error) {
                done(error);
            }
        }
        uppercase('String de teste', callback);
    });
});