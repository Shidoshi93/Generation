import readline from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const pergunta = () => {
    const numeros = [];

    for (let i = 0; i <= 1; i++) {
        const numero = readline.questionInt("Digite um número: ");
        numeros.push(numero);

        if (numeros[0] > numeros[1]) {
            console.log("Intervalo inválido");
        }
    }

    return numeros;
}

export const encontrarMultiplos = () => {
    const multiplosDeCincoETres = [];
    const numeros = pergunta();

    for (let i = numeros[0]; i <= numeros[1]; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é multiplo 3 e 5`);
            multiplosDeCincoETres.push(i);
        }
    }

    return multiplosDeCincoETres;
}

naoExucutaReadLineSeEhTeste(encontrarMultiplos);
