export const naoExucutaReadLineSeEhTeste = (execucao) => {
    const mainScriptPath = process.argv[1];

    if (mainScriptPath.includes("jest") === false) {
        execucao();
    }
}