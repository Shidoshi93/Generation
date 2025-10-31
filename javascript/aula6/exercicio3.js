import readlineSync from 'readline-sync';

const nome = readlineSync.question('Qual o seu nome? ');
const idade = readlineSync.questionInt('Qual a sua idade? ');
const ehDoador = "";

if(idade > 18 && idade > 69) {
    ehDoador = readlineSync.question('Você é doador de sangue? (s/n) ').toLowerCase();
}

if (idade >= 60 && idade <= 69 && ehDoador === 's') {
    console.log(`${nome} está apto para doar sangue!`);
} else if (idade >= 18 && idade <= 69) {
    console.log(`${nome} está apto para doar sangue!`);
} else {
    console.log(`${nome} não está apto para doar sangue!`)
}
