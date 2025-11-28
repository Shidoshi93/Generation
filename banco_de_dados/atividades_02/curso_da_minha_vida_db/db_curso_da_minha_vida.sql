-- Criação do banco de dados
CREATE DATABASE db_curso_da_minha_vida
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Seleção do banco de dados
USE db_curso_da_minha_vida;

-- Criação da tabela de categorias de cursos
CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao_categoria VARCHAR(255)
);

-- Inserção de 5 registros na tabela tb_categorias
INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Java', 'Cursos de programação em Java e desenvolvimento backend'),
('Python', 'Cursos de Python para data science, web e automação'),
('Web Design', 'Cursos de design de interface, UX/UI e web design moderno'),
('DevOps', 'Cursos de Docker, Kubernetes, CI/CD e infraestrutura'),
('Dados', 'Cursos de análise de dados, SQL, Big Data e BI');

-- Criação da tabela de cursos
CREATE TABLE tb_cursos (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL,
    descricao_curso VARCHAR(255),
    valor DECIMAL(10, 2) NOT NULL,
    id_categoria INT NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

-- Inserção de 8 registros na tabela tb_cursos
INSERT INTO tb_cursos (nome_curso, descricao_curso, valor, id_categoria) VALUES
('Java para Iniciantes', 'Curso completo de Java básico e orientado a objetos', 450.00, 1),
('Java Avançado com Spring Boot', 'Aprenda Spring Boot e desenvolva aplicações robustas em Java', 850.00, 1),
('Python para Data Science', 'Análise de dados com Python, Pandas e Machine Learning', 750.00, 2),
('Automação com Python', 'Scripts de automação e desenvolvimento de ferramentas em Python', 550.00, 2),
('Web Design Completo', 'Design de websites responsivos com HTML, CSS e JavaScript', 600.00, 3),
('UX/UI Design Masterclass', 'Princípios de design de experiência do usuário e interface', 950.00, 3),
('Docker e Kubernetes', 'Containerização com Docker e orquestração com Kubernetes', 1200.00, 4),
('SQL e Banco de Dados', 'Domínio completo em SQL, modelagem e otimização de banco de dados', 680.00, 5);

-- 1. SELECT: Cursos com valor maior que R$ 500,00
SELECT * FROM tb_cursos WHERE valor > 500.00;

-- 2. SELECT: Cursos com valor entre R$ 600,00 e R$ 1000,00
SELECT * FROM tb_cursos WHERE valor BETWEEN 600.00 AND 1000.00;

-- 3. SELECT: Cursos com a letra 'J' no nome (LIKE)
SELECT * FROM tb_cursos WHERE nome_curso LIKE '%J%';

-- 4. SELECT: INNER JOIN entre tb_cursos e tb_categorias
SELECT 
    c.id_curso,
    c.nome_curso,
    c.descricao_curso,
    c.valor,
    cat.nome_categoria,
    cat.descricao_categoria
FROM tb_cursos c
INNER JOIN tb_categorias cat ON c.id_categoria = cat.id_categoria;

-- 5. SELECT: INNER JOIN filtrando por categoria específica (Java)
SELECT 
    c.id_curso,
    c.nome_curso,
    c.descricao_curso,
    c.valor,
    cat.nome_categoria
FROM tb_cursos c
INNER JOIN tb_categorias cat ON c.id_categoria = cat.id_categoria
WHERE cat.nome_categoria = 'Java';
