import readlineSync from 'readline-sync';

const numero1 = readlineSync.questionFloat('Digite o primeiro número: ');
const numero2 = readlineSync.questionFloat('Digite o segundo número: ');
const operacao = readlineSync.questionFloat('Digite a operação desejada (1 = +, 2 = -, 3 = *, 4 = /): ');

switch (operacao) {
    case 1:
        console.log(`Resultado: ${numero1} + ${numero2} = ${parseFloat(numero1 + numero2).toFixed(1)}`);
        break;
    case 2:
        console.log(`Resultado: ${numero1} - ${numero2} = ${parseFloat(numero1 - numero2).toFixed(1)}`);
        break;
    case 3:
        console.log(`Resultado: ${numero1} * ${numero2} = ${parseFloat(numero1 * numero2).toFixed(1)}`);
        break;
    case 4:
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
        } else {
            console.log(`Resultado: ${numero1} / ${numero2} = ${parseFloat(numero1 / numero2).toFixed(1)}`);
        }
        break;
    default:
        console.log("Operação inválida!");
}

