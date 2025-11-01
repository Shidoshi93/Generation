import readlineSync from 'readline-sync';

const operacao = readlineSync.questionInt('Digite a operação desejada (1 = saldo, 2 = saque, 3 = deposito): ');
let saqueOuDeposito;

if (operacao === 2 || operacao === 3) {
    saqueOuDeposito = readlineSync.questionFloat('Digite o valor do saque ou depósito: ');
}

let saldo = 1000.00;

switch (operacao) {
    case 1:
        console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        if (saqueOuDeposito > saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            saldo -= saqueOuDeposito;
            console.log(`Saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;
    case 3:
        saldo += saqueOuDeposito;
        console.log(`Depósito realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);
        break;
    default:
        console.log("Operação inválida!");
}