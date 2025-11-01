import readLineSync from 'readline-sync';

// Refatorar para poder testar as funções separadamente

const nomeColaborador = readLineSync.question('Digite o nome do colaborador: ');
const codigoCargo = readLineSync.questionInt('Digite o código do cargo (1-6): ');
const salarioAtual = readLineSync.questionFloat('Digite o salário atual do colaborador: ');
const cargos = {
    1: {cargo: "Gerente", percentualAumento: 10},
    2: {cargo: "Vendedor", percentualAumento: 7},
    3: {cargo: "Supervisor", percentualAumento: 9},
    4: {cargo: "Motorista", percentualAumento: 6},
    5: {cargo: "Estoquista", percentualAumento: 5},
    6: {cargo: "Técnico de TI", percentualAumento: 8}
}

const novoSalrio = salarioAtual + (cargos[codigoCargo].percentualAumento * salarioAtual);

switch (codigoCargo) {
    case 1:
        console.log(`Colaborador: ${nomeColaborador}, Cargo: ${cargos[1].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, Novo Salário: R$ ${novoSalrio.toFixed(2)}`);
        break;
    case 2:
        console.log(`Colaborador: ${nomeColaborador}, Cargo: ${cargos[2].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, Novo Salário: R$ ${novoSalrio.toFixed(2)}`);
        break;
    case 3:
        console.log(`Colaborador: ${nomeColaborador}, Cargo: ${cargos[3].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, Novo Salário: R$ ${novoSalrio.toFixed(2)}`);
        break;
    case 4:
        console.log(`Colaborador: ${nomeColaborador}, Cargo: ${cargos[4].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, Novo Salário: R$ ${novoSalrio.toFixed(2)}`);
        break;
    case 5:
        console.log(`Colaborador: ${nomeColaborador}, Cargo: ${cargos[5].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, Novo Salário: R$ ${novoSalrio.toFixed(2)}`);
        break;
    case 6:
        console.log(`Colaborador: ${nomeColaborador}, Cargo: ${cargos[6].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, Novo Salário: R$ ${novoSalrio.toFixed(2)}`);
        break;
    default:
        console.log("Código de cargo inválido!");
}