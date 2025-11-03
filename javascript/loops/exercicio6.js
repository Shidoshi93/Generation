import readline from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const somaAteZero = () => {
    let numero;
    let total = 0;
    let contador = 0;

    do {
        numero = readline.questionInt("Digite um número (zero (0) para sair): ");

        if (numero % 3 === 0 && numero !== 0) {
            total += numero;
            contador++;

        }

    } while (numero !== 0);

    console.log(`A média dos números múltiplos de 3 é: ${total / contador}`);

    return total / contador;
}

naoExucutaReadLineSeEhTeste(somaAteZero);
