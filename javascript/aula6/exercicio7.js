import readlineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

const calcuadora = (numero1, numero2, operacao) => {
    let mensagem;

    switch (operacao) {
        case 1:
            mensagem = `Resultado: ${numero1} + ${numero2} = ${parseFloat(numero1 + numero2).toFixed(1)}`;
            break;
        case 2:
            mensagem = `Resultado: ${numero1} - ${numero2} = ${parseFloat(numero1 - numero2).toFixed(1)}`;
            break;
        case 3:
            mensagem = `Resultado: ${numero1} * ${numero2} = ${parseFloat(numero1 * numero2).toFixed(1)}`;
            break;
        case 4:
            if (numero2 === 0) {
                mensagem = "Erro: Divisão por zero não é permitida.";
            } else {
                mensagem = `Resultado: ${numero1} / ${numero2} = ${parseFloat(numero1 / numero2).toFixed(1)}`;
            }
            break;
        default:
            mensagem = "Operação inválida!";
    }

    console.log(mensagem);
    return mensagem;
}

const executarVerificacao = () => {
    const numero1 = readlineSync.questionFloat('Digite o primeiro número: ');
    const numero2 = readlineSync.questionFloat('Digite o segundo número: ');
    const operacao = readlineSync.questionFloat('Digite a operação desejada (1 = +, 2 = -, 3 = *, 4 = /): ');

    calcuadora(numero1, numero2, operacao);
}

naoExucutaReadLineSeEhTeste(executarVerificacao);