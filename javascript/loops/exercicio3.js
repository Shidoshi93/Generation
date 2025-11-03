import readline from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

export const verificaIdade = () => {
    let continuar = true;
    const idades = {
        jovem: 0,
        idoso: 0
    };

    while (continuar) {
        const idade = readline.questionInt("Digite a idade da pessoa: ");

        if (idade < 0) {
            break
        }

        if (idade < 21) idades.jovem += 1;
        if (idade > 50) idades.idoso += 1;
    }

    return idades;
}

export const mostrarResultado = () => {
    const idades = verificaIdade();
    console.log(`Total de pessoas menores de 21 anos: ${idades.jovem}`);
    console.log(`Total de pessoas maiores de 50 anos: ${idades.idoso}`);
    return idades;
}

naoExucutaReadLineSeEhTeste(mostrarResultado);