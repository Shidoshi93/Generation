import { verificaParOuImpar } from "../exercicio2";

describe("verificaParOuImpar", () => {
    let mockOutput;

    beforeEach(() => {
        mockOutput = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
        mockOutput.mockRestore();
    });

    test("Deve identificar número par e positivo", () => {
        verificaParOuImpar(4);
        expect(mockOutput).toHaveBeenCalledWith(
            "O número 4 é par e positivo!"
        );
    });

    test("Deve identificar número ímpar e positivo", () => {
        verificaParOuImpar(7);
        expect(mockOutput).toHaveBeenCalledWith(
            "O número 7 é ímpar e positivo!"
        );
    });

    test("Deve identificar número par e negativo", () => {
        verificaParOuImpar(-6);
        expect(mockOutput).toHaveBeenCalledWith(
            "O número -6 é par e negativo!"
        );
    });

    test("Deve identificar número ímpar e negativo", () => {
        verificaParOuImpar(-9);
        expect(mockOutput).toHaveBeenCalledWith(
            "O número -9 é ímpar e negativo!"
        );
    });
});