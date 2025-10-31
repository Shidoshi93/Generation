import readlineSync from 'readline-sync';

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let result = 0;

num1 = readlineSync.questionFloat("Digite o primeiro número: ");
num2 = readlineSync.questionFloat("Digite o segundo número: ");
num3 = readlineSync.questionFloat("Digite o terceiro número: ");
num4 = readlineSync.questionFloat("Digite o quarto número: ");

result = (num1 * num2) - (num3 * num4);

console.log(
    `O resultado do cálculo de produto é: 
    ${result.toFixed(2)}`
);
