import readline from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const somaAteZero = () => {
    let numero;
    let total = 0;

    do {
        numero = readline.questionInt("Digite um número (zero (0) para sair): ");

        if (numero > 0) {
            total += numero;
        }

    } while (numero !== 0);

    console.log(`A soma dos números positivos é: ${total}`);

    return total;
}

naoExucutaReadLineSeEhTeste(somaAteZero);
