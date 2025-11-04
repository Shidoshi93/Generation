import { calculaMedias } from "../exercicio10.js";
import { matriz } from "../exercicio10.js";

const resultado = [
    '4.8', '5.4', '9.0', '7.8', '5.3', 
    '8.1', '3.1', '9.1', '6.2', '8.9'
]

describe('Matriz', () => {
    test("Deve retornar ['4.8', '5.4', '9.0','7.8', '5.3', '8.1','3.1', '9.1', '6.2','8.9']", () => {
        expect(calculaMedias(matriz)).toEqual(resultado);
    });
});