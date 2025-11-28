-- Criação do banco de dados
CREATE DATABASE db_farmacia_bem_estar
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Seleção do banco de dados
USE db_farmacia_bem_estar;

-- Criação da tabela de categorias de produtos
CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao_categoria VARCHAR(255)
);

-- Inserção de 5 registros na tabela tb_categorias
INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Medicamentos', 'Medicamentos para diversos tipos de doenças'),
('Cosméticos', 'Produtos de beleza e cuidados com a pele'),
('Vitaminas', 'Suplementos vitamínicos e minerais'),
('Higiene', 'Produtos de higiene pessoal e limpeza'),
('Primeiros Socorros', 'Itens essenciais para primeiros socorros');

-- Criação da tabela de produtos
CREATE TABLE tb_produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    descricao_produto VARCHAR(255),
    preco DECIMAL(10, 2) NOT NULL,
    id_categoria INT NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria)
);

-- Inserção de 8 registros na tabela tb_produtos
INSERT INTO tb_produtos (nome_produto, descricao_produto, preco, id_categoria) VALUES
('Dipirona 500mg', 'Analgésico e antitérmico para dores e febre', 12.50, 1),
('Omeprazol 20mg', 'Medicamento para úlcera e refluxo gástrico', 35.00, 1),
('Creme Hidratante Facial', 'Creme facial com ácido hialurônico para pele seca', 78.90, 2),
('Protetor Solar FPS 50', 'Protetor solar premium com vitamina E', 55.00, 2),
('Vitamina C 1000mg', 'Suplemento de vitamina C para imunidade', 45.00, 3),
('Complexo B', 'Complexo vitamínico B completo para energia', 32.50, 3),
('Algodão Hospitalar 500g', 'Algodão puro para limpeza e curativos', 18.75, 4),
('Curativo Estéril 7x7cm', 'Curativos estéreis com antisséptico para ferimentos', 42.00, 5);

-- 1. SELECT: Produtos com valor maior que R$ 50,00
SELECT * FROM tb_produtos WHERE preco > 50.00;

-- 2. SELECT: Produtos com valor entre R$ 5,00 e R$ 60,00
SELECT * FROM tb_produtos WHERE preco BETWEEN 5.00 AND 60.00;

-- 3. SELECT: Produtos com a letra 'C' no nome (LIKE)
SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%';

-- 4. SELECT: INNER JOIN entre tb_produtos e tb_categorias
SELECT 
    p.id_produto,
    p.nome_produto,
    p.descricao_produto,
    p.preco,
    c.nome_categoria,
    c.descricao_categoria
FROM tb_produtos p
INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria;

-- 5. SELECT: INNER JOIN filtrando por categoria específica (Cosméticos)
SELECT 
    p.id_produto,
    p.nome_produto,
    p.descricao_produto,
    p.preco,
    c.nome_categoria
FROM tb_produtos p
INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria
WHERE c.nome_categoria = 'Cosméticos';
