import readline from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const encontrarNumero = () => {
    const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
    const numero = readline.questionInt("Digite um número: ");

    for (let i = 0; i < numeros.length; i++) {
        if (numero === numeros[i]) {
            console.log(`O número ${numero} está localizado na posição: ${i}`)
            return i;
        }
    }

    console.log(`O número ${numero} não foi encontrado`);
}

naoExucutaReadLineSeEhTeste(encontrarNumero);