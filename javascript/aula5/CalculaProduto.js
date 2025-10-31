import readlineSync from 'readline-sync';

let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let resultado = 0;

numero1 = readlineSync.questionFloat("Digite o primeiro número: ");
numero2 = readlineSync.questionFloat("Digite o segundo número: ");
numero3 = readlineSync.questionFloat("Digite o terceiro número: ");
numero4 = readlineSync.questionFloat("Digite o quarto número: ");

resultado = (numero1 * numero2) - (numero3 * numero4);

console.log(
    `O resultado do cálculo de produto é: 
    ${resultado.toFixed(2)}`
);
