import readlineSync from 'readline-sync';

let salary = 0;
let allowance = 0;

salary = readlineSync.questionFloat('Enter your salary: ');
allowance = readlineSync.questionFloat('Enter your allowance: ');

console.log(
        `Your total salary including allowance is: 
        ${parseFloat(salary + allowance).toFixed(2)}`
    );