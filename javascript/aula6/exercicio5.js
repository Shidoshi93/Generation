import readlineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

const produtos = {
    1: {nome: "Cachorro Quente", preco: 10.00},
    2: {nome: "X-Salada", preco: 15.00},
    3: {nome: "X-Bacon", preco: 18.00},
    4: {nome: "Bauru", preco: 12.00},
    5: {nome: "Refrigerante", preco: 8.00},
    6: {nome: "Suco de Laranja", preco: 13.00}
}

export const calcularTotalCompra = (codigoItem, quantidade) => {
    let mensagem;
    switch (codigoItem) {
        case 1:
            mensagem = `Produto: ${produtos[1].nome}, valor total: R$ ${(produtos[1].preco * quantidade).toFixed(2)}`;
            break;
        case 2:
            mensagem = `Produto: ${produtos[2].nome}, valor total: R$ ${(produtos[2].preco * quantidade).toFixed(2)}`;
            break;
        case 3:
            mensagem = `Produto: ${produtos[3].nome}, valor total: R$ ${(produtos[3].preco * quantidade).toFixed(2)}`;
            break;
        case 4:
            mensagem = `Produto: ${produtos[4].nome}, valor total: R$ ${(produtos[4].preco * quantidade).toFixed(2)}`;
            break;
        case 5:
            mensagem = `Produto: ${produtos[5].nome}, valor total: R$ ${(produtos[5].preco * quantidade).toFixed(2)}`;
            break;
        case 6:
            mensagem = `Produto: ${produtos[6].nome}, valor total: R$ ${(produtos[6].preco * quantidade).toFixed(2)}`;
            break;
        default:
            mensagem = "Código de item inválido!";
    }

    console.log(mensagem);
    return mensagem;
}

const executarVerificacao = () => {
    const codigoItem = readlineSync.questionInt('Digite o código do item (1-6): ');
    const quantidade = readlineSync.questionInt('Digite a quantidade desejada: ');

    calcularTotalCompra(codigoItem, quantidade);
};

naoExucutaReadLineSeEhTeste(executarVerificacao);