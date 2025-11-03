import {ehAptoParaDoarSangue} from '../exercicio3.js';

describe('Teste da função ehAptoParaDoarSangue())', () => {
    test('Deve retornar apto para idade entre 18 e 59 anos', () => {
        expect(ehAptoParaDoarSangue('Ana', 25, ''))
        .toBe('Ana está apto para doar sangue!');
    });

    test('Deve retornar apto para idade entre 60 e 69 anos e já é doador', () => {
        expect(ehAptoParaDoarSangue('Bruno', 65, 's'))
        .toBe('Bruno está apto para doar sangue!');
    });

    test('Deve retornar não apto para idade entre 60 e 69 anos e nunca doou', () => {
        expect(ehAptoParaDoarSangue('Carla', 62, 'n'))
        .toBe('Carla não está apto para doar sangue!');
    });

    test('Deve retornar não apto para idade menor que 18 anos', () => {
        expect(ehAptoParaDoarSangue('Daniel', 16, ''))
        .toBe('Daniel não está apto para doar sangue!');
    });

    test('Deve retornar não apto para idade maior que 69 anos', () => {
        expect(ehAptoParaDoarSangue('Elisa', 70, ''))
        .toBe('Elisa não está apto para doar sangue!');
    });
});