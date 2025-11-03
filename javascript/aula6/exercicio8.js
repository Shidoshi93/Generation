import readlineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const executaOpecaracaoBancaria = (operacao, valorSaqueOuDeposito) => {
    let mensagem;
    let saldo = 1000.00;

    switch (operacao) {
        case 1:
            mensagem = `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
            break;
        case 2:
            if (valorSaqueOuDeposito > saldo) {
                mensagem = "Saldo insuficiente para realizar o saque.";
            } else {
                saldo -= valorSaqueOuDeposito;
                mensagem = `Saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`;
            }
            break;
        case 3:
            saldo += valorSaqueOuDeposito;
            mensagem = `Depósito realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`;
            break;
        default:
            mensagem = "Operação inválida!";
    }

    console.log(mensagem);
    return mensagem;
}

const executarVerificacao = () => {
    let valorSaqueOuDeposito;

    const operacao = readlineSync
    .questionInt(
        "Digite a operação desejada " + 
        "(1 = saldo, 2 = saque, 3 = deposito): "
    );

    if (operacao === 2 || operacao === 3) {
        valorSaqueOuDeposito = readlineSync
            .questionFloat(
                operacao === 2 ? 
                    "Digite o valor do saque: " :
                    "DIgite o valor do depósito: "
            );
    }

    executaOpecaracaoBancaria(operacao, valorSaqueOuDeposito);
}

naoExucutaReadLineSeEhTeste(executarVerificacao);