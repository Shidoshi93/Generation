import { question } from 'readline-sync'

/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, 
que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
- Mostre na tela todas as cores adicionadas. 
- Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

const cores: Array<String> = new Array<String>();
let contador: number = 0;

do {
    const cor: String = question("Digite o cor: "); 

    cores.push(cor);
    contador++
} while (contador <= 4);

console.log("---Cores---\n");
cores.map((item) => console.log(item));

console.log("---Cores Ordenadas---\n");
cores.sort().map((item) => console.log(item));