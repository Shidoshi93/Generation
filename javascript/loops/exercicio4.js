import readline from 'readline-sync'

// Para resolver esta questão, mesmo sendo pra praticar o WHILE,
// acabei fazendo uso de outros laços de repetição, como o do...while, map e for.

const OPCOES_DEV = [
    "Backend",
    "Frontend",
    "Mobile",
    "FullStack"
];

const OPCOES_GENERO = [
    "Mulher Cis",
    "Homem Cis",
    "Não Binário",
    "Mulher Trans",
    "Homem Trans",
    "Outros"
];

const pessoas = [];

const obterEntradaValidada = (pergunta, opcoes) => {
    const promptOpcoes = opcoes
        .map((opcao, index) => `${index + 1} - ${opcao}`)
        .join('\n');

    let entrada;
    let indiceValido;

    do {
        console.log(`\n${pergunta}:`);
        console.log(promptOpcoes);
        
        entrada = readline.questionInt("Opcao: ");
        indiceValido = entrada > 0 && entrada <= opcoes.length;

        if (!indiceValido) {
            console.log("Opção inválida. Por favor, escolha um número da lista.");
        }
    } while (!indiceValido);

    return opcoes[entrada - 1];
};

const coletarDados = () => {
    let continuar = true;

    while (continuar) {
        const novaPessoa = {};

        let idade;
        do {
            idade = readline.questionInt("Qual a sua idade? ");
            if (idade < 0 || idade > 120) {
                console.log("Idade inválida. Por favor, digite um valor realista.");
            }
        } while (idade < 0 || idade > 120);

        novaPessoa.idade = idade;
        
        novaPessoa.genero = obterEntradaValidada("Qual seu gênero", OPCOES_GENERO);
        novaPessoa.tipoDesenvolvedor = obterEntradaValidada("Você é", OPCOES_DEV);

        pessoas.push(novaPessoa);

        if (readline.keyInYN("\nDeseja continuar com as perguntas? ") === false) {
            continuar = false;
        }
    }
}

export const computarDados = () => {
    let totalIdade = 0;
    const resultado = {
        devsBackend: 0,
        mulheresFrontend: 0,
        homensMobileAcimaDe40Anos: 0,
        naoBinariosFullStackMenoresDe30Anos: 0,
        totalRespostaPesquisa: 0,
        mediaIdade: 0,
    };
    
    for (const pessoa of pessoas) {
        totalIdade += pessoa.idade;

        const { idade, genero, tipoDesenvolvedor } = pessoa;

        // Dev Backend
        if (tipoDesenvolvedor === "Backend") {
            resultado.devsBackend++;
        }

        // Mulheres Frontend (Cis ou Trans)
        if (tipoDesenvolvedor === "Frontend" && 
            (genero === "Mulher Cis" || genero === "Mulher Trans")) {
            resultado.mulheresFrontend++;
        }
        
        // Homens Mobile (Cis ou Trans) acima de 40
        if (tipoDesenvolvedor === "Mobile" && 
            (genero === "Homem Cis" || genero === "Homem Trans") &&
            idade > 40) {
            resultado.homensMobileAcimaDe40Anos++;
        }
        
        // Não Binários FullStack menores de 30
        if (tipoDesenvolvedor === "FullStack" &&
            genero === "Não Binário" &&
            idade < 30) {
            resultado.naoBinariosFullStackMenoresDe30Anos++;
        }
    }

    resultado.totalRespostaPesquisa = pessoas.length;
    resultado.mediaIdade = pessoas.length > 0 ? (totalIdade / pessoas.length) : 0;
    
    console.log("\n--- Resultados Computados ---");
    console.log(resultado);
}

coletarDados();
computarDados();