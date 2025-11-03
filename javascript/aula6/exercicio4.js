import readlineSync from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../config/test.config.js';

const classificacao = {
    vertebrado: {
        ave: {
            carnivoro: 'Águia',
            onivoro: 'Pomba'
        },
        mamifero: {
            onivoro: 'Homem',
            herbivoro: 'Vaca'
        }
    },
    invertebrado: {
        inseto: {
            hematofago: 'Pulga',
            herbivoro: 'Lagarta'
        },
        anelideo: {
            hematofago: 'Sanguessuga',
            onivoro: 'Minhoca'
        }
    }
};

export const classificarAnimal = (subFilo, classe, alimentacao) => {
    const animal = classificacao?.[subFilo]?.[classe]?.[alimentacao];
    let mensagem;

    if (animal) {
        mensagem = `O animal classificado é: ${animal}`;
    } else {
        mensagem = 'Classificação inválida!';
    }

    console.log(mensagem);
    return mensagem;
}

const executarVerificacao = () => {
    const subFilo = readlineSync.question('Digite o subfilo do animal (Vertebrado/Invertebrado): ').toLowerCase();
    const classe = readlineSync.question('Digite a classe do animal (Ave/Mamífero/Inseto/Anelídeo): ').toLowerCase();
    const alimentacao = readlineSync.question('Digite a alimentação do animal (Carnívoro/Herbívoro/Onívoro): ').toLowerCase();

    classificarAnimal(subFilo, classe, alimentacao);
}

naoExucutaReadLineSeEhTeste(executarVerificacao);