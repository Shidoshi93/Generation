import readlineSync from 'readline-sync';

// Refatorar para poder testar as funções separadamente

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

const mainScriptPath = process.argv[1];

if (mainScriptPath.includes("jest.js") === false) {
    executarVerificacao();
}