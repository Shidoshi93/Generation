import { calcularNovoSalario } from "../exercicio6";

describe("Teste calcularNavoSalario()", () => {
    test("Cálculo do novo salário para código de cargo 1", () => {
        const resultado = calcularNovoSalario("Ana", 1, 3000);
        expect(resultado).toBe(`
                        Colaborador: Ana, 
                        Cargo: Gerente, Salário Atual: R$ 3000.00, 
                        Novo Salário: R$ 33000.00`);
    });

    test("Cálculo do novo salário para código de cargo 4", () => {
        const resultado = calcularNovoSalario("Bruno", 4, 2500);
        expect(resultado).toBe(`
                        Colaborador: Bruno, 
                        Cargo: Motorista, Salário Atual: R$ 2500.00, 
                        Novo Salário: R$ 17500.00`);
    });

    test("Código de cargo inválido", () => {
        const resultado = calcularNovoSalario("Carla", 10, 4000);
        expect(resultado).toBe("Código de cargo inválido!");
    });
});