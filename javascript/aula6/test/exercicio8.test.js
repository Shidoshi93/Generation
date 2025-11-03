import { executaOpecaracaoBancaria } from "../exercicio8";

describe('Teste executaOpecaracaoBancaria()', () => {
    test('Deve retornar o saldo inicial corretamente', () => {
        const mensagem = executaOpecaracaoBancaria(1);
        expect(mensagem).toBe('Seu saldo atual é: R$ 1000.00');
    });

    test('Deve realizar saque corretamente quando há saldo suficiente', () => {
        const mensagem = executaOpecaracaoBancaria(2, 200);
        expect(mensagem).toBe('Saque realizado com sucesso! Novo saldo: R$ 800.00');
    });

    test('Deve impedir saque quando o saldo é insuficiente', () => {
        const mensagem = executaOpecaracaoBancaria(2, 1200);
        expect(mensagem).toBe('Saldo insuficiente para realizar o saque.');
    });

    test('Deve realizar depósito corretamente', () => {
        const mensagem = executaOpecaracaoBancaria(3, 500);
        expect(mensagem).toBe('Depósito realizado com sucesso! Novo saldo: R$ 1500.00');
    });

    test('Deve retornar operação inválida para operação desconhecida', () => {
        const mensagem = executaOpecaracaoBancaria(4);
        expect(mensagem).toBe('Operação inválida!');
    });
});