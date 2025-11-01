import readlineSync from 'readline-sync';

// Refatorar para poder testar as funções separadamente

const codigoItem = readlineSync.questionInt('Digite o código do item (1-6): ');
const quantidade = readlineSync.questionInt('Digite a quantidade desejada: ');
const produtos = {
    1: {nome: "Cachorro Quente", preco: 10.00},
    2: {nome: "X-Salada", preco: 15.00},
    3: {nome: "X-Bacon", preco: 18.00},
    4: {nome: "Bauru", preco: 12.00},
    5: {nome: "Refrigerante", preco: 8.00},
    6: {nome: "Suco de Laranja", preco: 13.00}
}

switch (codigoItem) {
    case 1:
        console.log(`Produto: ${produtos[1].nome}, valor total: R$ ${(produtos[1].preco * quantidade).toFixed(2)}`);
        break;
    case 2:
        console.log(`Produto: ${produtos[2].nome}, valor total: R$ ${(produtos[2].preco * quantidade).toFixed(2)}`);
        break;
    case 3:
        console.log(`Produto: ${produtos[3].nome}, valor total: R$ ${(produtos[3].preco * quantidade).toFixed(2)}`);
        break;
    case 4:
        console.log(`Produto: ${produtos[4].nome}, valor total: R$ ${(produtos[4].preco * quantidade).toFixed(2)}`);
        break;
    case 5:
        console.log(`Produto: ${produtos[5].nome}, valor total: R$ ${(produtos[5].preco * quantidade).toFixed(2)}`);
        break;
    case 6:
        console.log(`Produto: ${produtos[6].nome}, valor total: R$ ${(produtos[6].preco * quantidade).toFixed(2)}`);
        break;
    default:
        console.log("Código de item inválido!");
}