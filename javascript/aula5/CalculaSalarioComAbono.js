import readlineSync from 'readline-sync';

let salario = 0;
let abono = 0;

salario = readlineSync.questionFloat('Digite seu salário: ');
abono = readlineSync.questionFloat('Digite seu abono: ');

console.log(
        `O valor totao do salário com abono é: 
        ${parseFloat(salario + abono).toFixed(2)}`
    );