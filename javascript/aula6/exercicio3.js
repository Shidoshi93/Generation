import readlineSync from 'readline-sync';

export const ehAptoParaDoarSangue = (nome, idade, jaEhDoador) => {
    let mensagem = "";

    if (idade >= 60 && idade <= 69 && jaEhDoador === 's') {
        mensagem = `${nome} está apto para doar sangue!`;
    }

    if (idade >= 60 && idade <= 69 && jaEhDoador === 'n' ||
        idade < 18 || idade > 69) {
        mensagem = `${nome} não está apto para doar sangue!`;
    }
    
    if (idade >= 18 && idade < 60) {
        mensagem = `${nome} está apto para doar sangue!`;
    }

    console.log(mensagem);
    return mensagem;
}

const executarVerificacao = () => {
    const nome = readlineSync.question('Qual o seu nome? ');
    const idade = readlineSync.questionInt('Qual a sua idade? ');
    let jaEhDoador = "";

    if (idade >= 60 && idade <= 69) {
        jaEhDoador = readlineSync.question('Você é doador de sangue? (s/n) ').toLowerCase();
    }

    ehAptoParaDoarSangue(nome, idade, jaEhDoador);
};

const mainScriptPath = process.argv[1];

if (mainScriptPath.includes("jest") === false) {
    executarVerificacao();
}
