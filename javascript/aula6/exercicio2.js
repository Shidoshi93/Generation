import readlineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export function verificaParOuImpar(num) {
    if (num % 2 === 0 && num > 0) {
        console.log(`O número ${num} é par e ${verificaNegativoOuPositivo(num)}!`);
    }

    if (num % 2 !== 0 && num > 0) {
        console.log(`O número ${num} é ímpar e ${verificaNegativoOuPositivo(num)}!`);
    }

    if (num % 2 === 0 && num < 0) {
        console.log(`O número ${num} é par e ${verificaNegativoOuPositivo(num)}!`);
    }

    if (num % 2 !== 0 && num < 0) {
        console.log(`O número ${num} é ímpar e ${verificaNegativoOuPositivo(num)}!`);
    }
}

export function verificaNegativoOuPositivo(num) {
    if (num > 0) {
        return "positivo"; 
    }

    return "negativo";
}

function executarVerificacao() {
    verificaParOuImpar(readlineSync.questionInt("Digite um numero inteiro: "));
};

naoExucutaReadLineSeEhTeste(executarVerificacao);