import { calcuadora } from "../exercicio7";

describe('Testando a função calcuadora', () => {
    test('Deve retornar a soma correta', () => {
        expect(calcuadora(5, 3, 1)).toBe('Resultado: 5 + 3 = 8.0');
    });

    test('Deve retornar a subtração correta', () => {
        expect(calcuadora(5, 3, 2)).toBe('Resultado: 5 - 3 = 2.0');
    });

    test('Deve retornar a multiplicação correta', () => {
        expect(calcuadora(5, 3, 3)).toBe('Resultado: 5 * 3 = 15.0');
    });

    test('Deve retornar a divisão correta', () => {
        expect(calcuadora(6, 3, 4)).toBe('Resultado: 6 / 3 = 2.0');
    });

    test('Deve retornar erro ao dividir por zero', () => {
        expect(calcuadora(6, 0, 4))
        .toBe('Erro: Divisão por zero não é permitida.');
    });

    test('Deve retornar operação inválida para operação desconhecida', () => {
        expect(calcuadora(5, 3, 5)).toBe('Operação inválida!');
    });
});