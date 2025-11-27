
-- Criando tabela departamentos
CREATE TABLE Departamentos (
    id_departamento INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_departamento VARCHAR(100) NOT NULL UNIQUE
);

-- Criando tabela cargos
CREATE TABLE Cargos (
    id_cargo INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_cargo VARCHAR(100) NOT NULL UNIQUE,
    salario_base DECIMAL(10, 2) NOT NULL
);

-- Criando tabela colaboradores
CREATE TABLE Colaboradores (
    id_colaborador INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    data_contratacao DATE NOT NULL,
    status_colaborador ENUM('Ativo', 'Licença', 'Desligado') NOT NULL DEFAULT 'Ativo',
    id_departamento INTEGER,
    id_cargo INTEGER,
    
    FOREIGN KEY (id_departamento) REFERENCES Departamentos(id_departamento),
    FOREIGN KEY (id_cargo) REFERENCES Cargos(id_cargo)
);

-- Criando tabela contatos
CREATE TABLE Contatos (
    id_contato INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_colaborador INTEGER NOT NULL UNIQUE, -- UNIQUE para garantir 1 registro de contato principal por colaborador
    email_corporativo VARCHAR(150) NOT NULL UNIQUE,
    telefone_primario VARCHAR(20),
    
    FOREIGN KEY (id_colaborador) REFERENCES Colaboradores(id_colaborador)
);

-- Criando tabela contratos
CREATE TABLE Contratos (
    id_contrato INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_colaborador INTEGER NOT NULL,
    tipo_contrato VARCHAR(50) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim_prevista DATE,
    is_ativo BOOLEAN NOT NULL DEFAULT TRUE,
    
    FOREIGN KEY (id_colaborador) REFERENCES Colaboradores(id_colaborador)
);

-- Inserindo dados nas tabelas

INSERT INTO Departamentos (nome_departamento) VALUES
('Recursos Humanos'),
('Desenvolvimento de Software'),
('Financeiro'),
('Marketing');

INSERT INTO Cargos (nome_cargo, salario_base) VALUES
('Analista de RH Sênior', 7500.00),
('Desenvolvedor Júnior', 4200.00),
('Gerente Financeiro', 12000.00),
('Assistente Administrativo', 1700.00);

INSERT INTO Colaboradores (nome_completo, data_nascimento, data_contratacao, id_departamento, id_cargo) VALUES
('João Silva', '1985-05-20', '2018-08-15', 1, 1),
('Maria Souza', '1995-11-10', '2023-01-25', 2, 2),
('Janice Ferreira', '1993-11-10', '2023-01-25', 2, 2),
('Juliana Oliveira', '1983-05-25', '2023-01-25', 3, 3),
('Carlos Ferreira', '1979-03-01', '2015-04-01', 3, 3),
('Ivoneide Santos', '1983-05-25', '2023-01-25', 4, 4);

INSERT INTO Contatos (id_colaborador, email_corporativo, telefone_primario) VALUES
(1, 'joao.silva@generation.com.br', '5511987654321'),
(2, 'maria.souza@generation.com.br', '5521998765432'),
(3, 'janice.ferreira@generation.com.br', '5521998765444'),
(4, 'juliana.oliveira@generation.com.br', '5521998765999'),
(5, 'carlos.ferreira@generation.com.br', '5511999998888'),
(6, 'ivoneide.santos@generation.com.br', '5511999998777');

-- Contrato Ativo de João (CLT)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(1, 'CLT', '2018-08-15', NULL, TRUE);

-- Contrato de Estágio de Maria (Desativo)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(2, 'Estágio', '2022-07-01', '2023-01-24', FALSE);

-- Contrato Ativo de Maria (CLT)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(2, 'CLT', '2023-01-25', NULL, TRUE);

-- Contrato Ativo de Janice (CLT Indeterminado)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(3, 'CLT', '2023-01-25', NULL, TRUE);

-- Contrato Ativo de Juliana (CLT)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(4, 'CLT', '2023-01-25', NULL, TRUE);

-- Contrato Ativo de Carlos (CLT)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(5, 'CLT', '2015-04-01', NULL, TRUE);

-- Contrato Ativo de Ivoneide (CLT)
INSERT INTO Contratos (id_colaborador, tipo_contrato, data_inicio, data_fim_prevista, is_ativo) VALUES
(6, 'CLT', '2015-04-01', NULL, TRUE);

-- Retornando todos os colaboradores que possuem um salário maior que 5.000,00
SELECT 
	c.nome_completo, c.id_cargo, ca.salario_base  
FROM 
	Colaboradores c 
JOIN 
	Cargos ca ON c.id_cargo = ca.id_cargo
WHERE 
	ca.salario_base > 5000.00;

-- Retornando todos os colaboradores que possuem um salário menor que 2.000,00
SELECT 
	c.nome_completo, c.id_cargo, ca.salario_base  
FROM 
	Colaboradores c 
JOIN 
	Cargos ca ON c.id_cargo = ca.id_cargo
WHERE 
	ca.salario_base < 2000.00;

-- Atualizando o contrato de Ivoneide para finalizado:
UPDATE Contratos c
JOIN Colaboradores co ON co.id_colaborador = c.id_colaborador 
SET 
	c.data_fim_prevista = '2025-11-26', 
	c.is_ativo = false,
	co.status_colaborador = 'Desligado'
WHERE 
	c.id_colaborador = 6;

-- Confirmando que o contrato de Ivoneide está finalizado finalizado:
SELECT 
	*
FROM 
	Colaboradores c 
JOIN 
	Contratos co ON c.id_colaborador = co.id_colaborador
WHERE 
	c.id_colaborador = 6;































