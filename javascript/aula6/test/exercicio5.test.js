import { calcularTotalCompra } from "../exercicio5";

describe('calcularTotalCompra', () => {
    test('Deve calcular o total para código 1 e quantidade 2', () => {
        const resultado = calcularTotalCompra(1, 2);
        expect(resultado).toBe('Produto: Cachorro Quente, valor total: R$ 20.00');
    });

    test('Deve calcular o total para código 3 e quantidade 1', () => {
        const resultado = calcularTotalCompra(3, 1);
        expect(resultado).toBe('Produto: X-Bacon, valor total: R$ 18.00');
    });

    test('Deve retornar mensagem de código inválido para código 10', () => {
        const resultado = calcularTotalCompra(10, 1);
        expect(resultado).toBe('Código de item inválido!');
    });
});