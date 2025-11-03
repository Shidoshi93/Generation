import readlineSync from 'readline-sync';

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

    if (animal) {
        console.log(`O animal classificado é: ${animal}`);
    } else {
        console.log('Classificação inválida!');
    }
}

const executarVerificacao = () => {
    const subFilo = readlineSync.question('Digite o subfilo do animal (Vertebrado/Invertebrado): ').toLowerCase();
    const classe = readlineSync.question('Digite a classe do animal (Ave/Mamífero/Inseto/Anelídeo): ').toLowerCase();
    const alimentacao = readlineSync.question('Digite a alimentação do animal (Carnívoro/Herbívoro/Onívoro): ').toLowerCase();

    classificarAnimal(subFilo, classe, alimentacao);
}

const mainScriptPath = process.argv[1];

if (mainScriptPath.includes("jest") === false) {
    executarVerificacao();
}