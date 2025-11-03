import readline from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const pergunta = () => {
    const numeros = [];

    for (let i = 0; i < 10; i++) {
        const numero = readline.questionInt("Digite um número: ");
        numeros.push(numero);

        if (numeros[0] > numeros[1]) {
            console.log("Intervalo inválido");
        }
    }

    return numeros;
}

export const encontrarDivisiveisPorDois = () => {
    const divisiveisPorDois = [];
    const numeros = pergunta();
    const resultado = {};

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(`${numeros[i]} é divisível por 2`);
            divisiveisPorDois.push(numeros[i]);
        }
    }

    resultado.pares = divisiveisPorDois.length;
    resultado.impares = numeros.length - divisiveisPorDois.length;

    console.log(`Total de números pares: ${divisiveisPorDois.length}`);
    console.log(`Total de números ímpares: ${resultado.impares}`);
    console.log(resultado)

    return resultado;
}

naoExucutaReadLineSeEhTeste(encontrarDivisiveisPorDois);
