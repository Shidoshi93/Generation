export const naoExucutaReadLineSeEhTeste = (execucao) => {
    // Detect running under Jest in a robust way:
    // - Jest sets the JEST_WORKER_ID environment variable for worker processes.
    const isJest = typeof process.env.JEST_WORKER_ID !== 'undefined' || process.env.NODE_ENV === 'test';

    if (!isJest) {
        execucao();
    }
}