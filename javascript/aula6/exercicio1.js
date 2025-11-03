import readlineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export function compararSoma(valorA, valorB, valorC, outputFunc = console.log) {
    const somaAB = valorA + valorB;
    let mensagem;

    if (somaAB > valorC) {
        mensagem = "A soma de A e B é maior que C";
    } else if (somaAB < valorC) {
        mensagem = "A soma de A e B é menor que C";
    } else {
        mensagem = "A soma de A e B é igual a C";
    }

    outputFunc(mensagem);
    return mensagem;
}

function executarComparacao() {
    const valorA = readlineSync.questionInt("Digite o primeiro numero: ");
    const valorB = readlineSync.questionInt("Digite o segundo numero: ");
    const valorC = readlineSync.questionInt("Digite o terceiro numero: ");

    compararSoma(valorA, valorB, valorC);
}

naoExucutaReadLineSeEhTeste(executarComparacao);