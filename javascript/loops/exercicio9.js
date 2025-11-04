import { naoExucutaReadLineSeEhTeste } from "../config/test.config.js";

const matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

export const descobreDiagonalMatriz = () => {
    let resultado = {
        "diagonalPrincipal": [],
        "diagonalSecundaria": [],
        "somaElementosDiagonalPrincipal": 0,
        "somaElementosDiagonalSecundaria": 0,
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const elemento = matriz[i][j];
            if (i == j) {
                resultado.diagonalPrincipal.push(elemento);
                resultado.somaElementosDiagonalPrincipal += elemento
            }

            if (i + j === matriz.length - 1) {
                resultado.diagonalSecundaria.push(elemento);
                resultado.somaElementosDiagonalSecundaria += elemento

            }
        }
    }

    console.log(`Elementos da Diagonal Principal ${resultado.diagonalPrincipal.map((item) => (
        item
    ))}`)
    console.log(`Elementos da Diagonal Secundária ${resultado.diagonalSecundaria.map((item) => (
        item
    ))}`)
    console.log(`Soma dos Elementos da Diagonal Principal: ${resultado.somaElementosDiagonalPrincipal}`);
    console.log(`Soma dos Elementos da Diagonal Secundária: ${resultado.somaElementosDiagonalSecundaria}`);

    return resultado;
}

naoExucutaReadLineSeEhTeste(descobreDiagonalMatriz);