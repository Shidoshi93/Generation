import { classificarAnimal } from "../exercicio4";

describe('classificarAnimal', () => {
    test('deve retornar Águia para vertebrado, ave, carnivoro', () => {
        expect(classificarAnimal('vertebrado', 'ave', 'carnivoro'))
        .toBe('O animal classificado é: Águia');
    });

    test('deve retornar Pomba para vertebrado, ave, onivoro', () => {
        expect(classificarAnimal('vertebrado', 'ave', 'onivoro'))
        .toBe('O animal classificado é: Pomba');
    });

    test('deve retornar Homem para vertebrado, mamifero, onivoro', () => {
        expect(classificarAnimal('vertebrado', 'mamifero', 'onivoro'))
        .toBe('O animal classificado é: Homem');
    });

    test('deve retornar Vaca para vertebrado, mamifero, herbivoro', () => {
        expect(classificarAnimal('vertebrado', 'mamifero', 'herbivoro'))
        .toBe('O animal classificado é: Vaca');
    });

    test('deve retornar Pulga para invertebrado, inseto, hematofago', () => {
        expect(classificarAnimal('invertebrado', 'inseto', 'hematofago'))
        .toBe('O animal classificado é: Pulga');
    });

    test('deve retornar Lagarta para invertebrado, inseto, herbivoro', () => {
        expect(classificarAnimal('invertebrado', 'inseto', 'herbivoro'))
        .toBe('O animal classificado é: Lagarta');
    });

    test('deve retornar Sanguessuga para invertebrado, anelideo, hematofago', () => {
        expect(classificarAnimal('invertebrado', 'anelideo', 'hematofago'))
        .toBe('O animal classificado é: Sanguessuga');
    });

    test('deve retornar Minhoca para invertebrado, anelideo, onivoro', () => {
        expect(classificarAnimal('invertebrado', 'anelideo', 'onivoro'))
        .toBe('O animal classificado é: Minhoca');
    });

    test('deve retornar undefined para classificação inválida', () => {
        expect(classificarAnimal('vertebrado', 'réptil', 'carnivoro'))
        .toBe('Classificação inválida!');
    });
});