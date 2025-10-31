import readlineSync from 'readline-sync';

let salarioBruto = 0;
let adiconalNoturno = 0;
let horasExtras = 0;
let descontos = 0;
let salarioLiquido = 0;

salarioBruto = readlineSync.questionFloat("Digite o seu salário bruto: ");
adiconalNoturno = readlineSync.questionFloat("Digite o valor do adicional noturno: ");
horasExtras = readlineSync.questionFloat("Digite o valor das horas extras: ");
descontos = readlineSync.questionFloat("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adiconalNoturno + (horasExtras * 5) - descontos;

console.log(
    `O seu salário líquido é: 
    ${salarioLiquido.toFixed(2)}`
);