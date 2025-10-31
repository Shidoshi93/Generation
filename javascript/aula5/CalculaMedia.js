import readlineSync from 'readline-sync';

let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let media = 0;

nota1 = readlineSync.questionFloat("Qual a sua primeira nota? ");
nota2 = readlineSync.questionFloat("Qual a sua segunda nota? ");
nota3 = readlineSync.questionFloat("Qual a sua terceira nota? ");
nota4 = readlineSync.questionFloat("Qual a sua quarta nota? ");

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(
    `A sua média final é: 
    ${media.toFixed(2)}`
);