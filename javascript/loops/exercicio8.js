import { naoExucutaReadLineSeEhTeste } from "../config/test.config.js";

export const paresEImpares = () => {
    const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
    let resultado = {
        "pares": [],
        "impares": [],
        "total": 0,
        "media": 0,
    }

    for (const element of numeros) {
        element % 2 === 0 ? resultado.pares.push(element) : resultado.impares.push(element);
    }

    resultado.soma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
    resultado.media = (resultado.soma / numeros.length).toFixed(2);

    console.log(`Elementos nos índices ímpares: ${resultado.impares.map((item) => item)}`);
    console.log(`Elementos pares: ${resultado.pares.map((item) => item)}`);
    console.log(`Soma: ${resultado.soma}`);
    console.log(`Média: ${resultado.media}`);

    return resultado;
}

naoExucutaReadLineSeEhTeste(paresEImpares)