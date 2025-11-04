import { naoExucutaReadLineSeEhTeste } from "../config/test.config.js";

export const matriz = [
    [4.0, 5.0, 7.0, 3.0],
    [2.5, 6.5, 4.7, 8.0],
    [10.0, 8.5, 9.5, 8.0],
    [9.0, 6.5, 7.6, 8.2],
    [5.0, 5.0, 5.0, 6.3],
    [7.0, 8.0, 9.0, 8.5],
    [5.5, 3.5, 2.5, 1.0],
    [8.0, 9.0, 10.0, 9.5],
    [5.6, 5.8, 6.5, 7.0],
    [7.5, 8.5, 9.5, 10.0]
];

export const calculaMedias = () => {
    const medias = [];
    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i];

        let soma = 0;
        let contador = 0;

        for (let j = 0; j < linha.length; j++) {
            const valor = linha[j];
            soma += valor;
            contador++;
        }

        const mediaLinha = soma / contador;
        medias.push(mediaLinha.toFixed(1));
    }

    console.log(medias);

    return medias;
}

naoExucutaReadLineSeEhTeste(calculaMedias);