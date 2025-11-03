import readLineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

const cargos = {
    1: {cargo: "Gerente", percentualAumento: 10},
    2: {cargo: "Vendedor", percentualAumento: 7},
    3: {cargo: "Supervisor", percentualAumento: 9},
    4: {cargo: "Motorista", percentualAumento: 6},
    5: {cargo: "Estoquista", percentualAumento: 5},
    6: {cargo: "Técnico de TI", percentualAumento: 8}
}

export const calcularNovoSalario = (nomeColaborador, codigoCargo, salarioAtual) => {
    let novoSalrio = salarioAtual + (cargos[codigoCargo].percentualAumento * salarioAtual);
    let mensagem;

    switch (codigoCargo) {
        case 1:
            mensagem = `
                        Colaborador: ${nomeColaborador}, 
                        Cargo: ${cargos[1].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, 
                        Novo Salário: R$ ${novoSalrio.toFixed(2)}`;
            break;
        case 2:
            mensagem = `
                        Colaborador: ${nomeColaborador}, 
                        Cargo: ${cargos[2].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, 
                        Novo Salário: R$ ${novoSalrio.toFixed(2)}`;
            break;
        case 3:
            mensagem = `
                        Colaborador: ${nomeColaborador}, 
                        Cargo: ${cargos[3].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, 
                        Novo Salário: R$ ${novoSalrio.toFixed(2)}`;
            break;
        case 4:
            mensagem = `
                        Colaborador: ${nomeColaborador}, 
                        Cargo: ${cargos[4].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, 
                        Novo Salário: R$ ${novoSalrio.toFixed(2)}`;
            break;
        case 5:
            mensagem = `
                        Colaborador: ${nomeColaborador}, 
                        Cargo: ${cargos[5].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, 
                        Novo Salário: R$ ${novoSalrio.toFixed(2)}`;
            break;
        case 6:
            mensagem = `
                        Colaborador: ${nomeColaborador}, 
                        Cargo: ${cargos[6].cargo}, Salário Atual: R$ ${salarioAtual.toFixed(2)}, 
                        Novo Salário: R$ ${novoSalrio.toFixed(2)}`;
            break;
        default:
            mensagem = "Código de cargo inválido!";
    }

    console.log(mensagem);
    return mensagem;
}

const executarVerificacao = () => {
    const nomeColaborador = readLineSync.question('Digite o nome do colaborador: ');
    const codigoCargo = readLineSync.questionInt('Digite o código do cargo (1-6): ');
    const salarioAtual = readLineSync.questionFloat('Digite o salário atual do colaborador: ');

    calcularNovoSalario(nomeColaborador, codigoCargo, salarioAtual);
};

naoExucutaReadLineSeEhTeste(executarVerificacao);