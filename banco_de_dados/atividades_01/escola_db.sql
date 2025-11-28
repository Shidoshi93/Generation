-- Criação do banco de dados
CREATE DATABASE escola_db
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Seleção do banco de dados
USE escola_db;

-- Criação da tabela estudantes
CREATE TABLE estudantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    serie VARCHAR(20) NOT NULL,
    nota DECIMAL(3,1) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- Inserção de 8 registros na tabela
INSERT INTO estudantes (nome, idade, serie, nota, email) VALUES
('Ana Silva', 15, '9º ano', 8.5, 'ana.silva@email.com'),
('Carlos Santos', 14, '8º ano', 6.2, 'carlos.santos@email.com'),
('Maria Oliveira', 16, '1º ano EM', 9.1, 'maria.oliveira@email.com'),
('João Pedro', 13, '7º ano', 5.8, 'joao.pedro@email.com'),
('Lucia Ferreira', 15, '9º ano', 7.9, 'lucia.ferreira@email.com'),
('Rafael Costa', 17, '2º ano EM', 4.5, 'rafael.costa@email.com'),
('Beatriz Lima', 14, '8º ano', 8.7, 'beatriz.lima@email.com'),
('Pedro Alves', 16, '1º ano EM', 6.8, 'pedro.alves@email.com');

-- SELECT dos estudantes com nota maior que 7.0
SELECT * FROM estudantes WHERE nota > 7.0;

-- SELECT dos estudantes com nota menor que 7.0
SELECT * FROM estudantes WHERE nota < 7.0;

-- Atualização de um registro (atualizando a nota do Rafael Costa)
UPDATE estudantes 
SET nota = 7.5 
WHERE id = 6;

-- SELECT de todos estudandtes
SELECT * FROM estudantes