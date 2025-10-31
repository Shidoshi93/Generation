import readlineSync from 'readline-sync';

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let average = 0;

n1 = readlineSync.questionFloat("Qual a sua primeira nota? ");
n2 = readlineSync.questionFloat("Qual a sua segunda nota? ");
n3 = readlineSync.questionFloat("Qual a sua terceira nota? ");
n4 = readlineSync.questionFloat("Qual a sua quarta nota? ");

average = (n1 + n2 + n3 + n4) / 4;

console.log(
    `A sua média final é: 
    ${average.toFixed(2)}`
);