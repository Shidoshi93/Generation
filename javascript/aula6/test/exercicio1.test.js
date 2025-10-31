import { compararSoma } from '../exercicio1.js';

describe('Testes da Lógica de Comparação (compararSoma)', () => {
    let mockOutput;

    beforeEach(() => {
        mockOutput = jest.fn();
    });

    test('Deve indicar que a soma de A + B é maior que C', () => {
        const valorA = 10;
        const valorB = 5;
        const valorC = 12;

        const res = compararSoma(valorA, valorB, valorC, mockOutput);

        expect(res).toBe('A soma de A e B é maior que C');
        expect(mockOutput).toHaveBeenCalledWith(
            'A soma de A e B é maior que C'
        );
    });

    test('Deve indicar que a soma de A + B é menor que C', () => {
        const valorA = 2;
        const valorB = 3;
        const valorC = 6;

        const res = compararSoma(valorA, valorB, valorC, mockOutput);

        expect(res).toBe('A soma de A e B é menor que C');
        expect(mockOutput).toHaveBeenCalledWith(
            'A soma de A e B é menor que C'
        );
    });

    test('Deve indicar que a soma de A + B é igual a C', () => {
        const valorA = 4;
        const valorB = 4;
        const valorC = 8;

        const res = compararSoma(valorA, valorB, valorC, mockOutput);

        expect(res).toBe('A soma de A e B é igual a C');
        expect(mockOutput).toHaveBeenCalledWith(
            'A soma de A e B é igual a C'
        );
    });
});