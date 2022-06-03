const { describe, expect, it, beforeEach, afterEach } = require("@jest/globals");
const {
    createPresentationMessage,
    hackTheDB,
    restartDB,
} = require("./callbacks");

describe("A função createPresentationMessage", () => {

    beforeEach(() => {
        restartDB();
    });
    afterEach(() => {
        restartDB();
    });

    it("retorna corretamente a string", (done) => {
        const expectedString = "Oi, galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce";

        function callback(err, result) {
            try {
                expect(result).toBe(expectedString);
                done();
            } catch (error) {
                done(error);
            }       
        }

        createPresentationMessage("Xuxa", callback);
    });

    it("retorna erro quando falha", (done) => {
        hackTheDB();
        const expectedError = new Error("Explodiu");
        function callback(err, result) {
            try {
                expect(err).toEqual(expectedError);
                done();
            } catch (error) {
                done(error);
            }       
        }
        createPresentationMessage("Xuxa", callback);
    });
});
