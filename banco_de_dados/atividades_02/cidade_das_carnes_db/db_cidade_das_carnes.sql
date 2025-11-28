-- Criação do banco de dados
CREATE DATABASE db_cidade_das_carnes
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Seleção do banco de dados
USE db_cidade_das_carnes;

-- Criação da tabela de categorias de produtos
CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao_categoria VARCHAR(255)
);

-- Inserção de 5 registros na tabela tb_categorias
INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Carnes Vermelhas', 'Cortes premium de bovino para diversos fins'),
('Aves', 'Frangos e outras aves frescas e congeladas'),
('Suínos', 'Produtos de suínos de alta qualidade'),
('Embutidos', 'Linguiças, presuntos e outros embutidos'),
('Miudezas', 'Órgãos e outras partes nobres de animais');

-- Criação da tabela de produtos
CREATE TABLE tb_produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    descricao_produto VARCHAR(255),
    preco DECIMAL(10, 2) NOT NULL,
    id_categoria INT NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),

    -- Adicionando uma restrição para garantir que o preço seja positivo
    CONSTRAINT ck_preco_positivo CHECK (preco > 0)
);

-- Inserção de 8 registros na tabela tb_produtos
INSERT INTO tb_produtos (nome_produto, descricao_produto, preco, id_categoria) VALUES
('Alcatra Premium', 'Corte nobre de carne vermelha de primeira qualidade', 89.90, 1),
('Carne Moída', 'Carne bovina moída fresca e pronta para preparar', 35.00, 1),
('Frango Inteiro', 'Frango fresco de granja selecionada', 28.50, 2),
('Peito de Frango', 'Peito de frango desossado e sem pele', 42.00, 2),
('Costela Suína', 'Costela de porco temperada pronta para churrasco', 65.00, 3),
('Linguiça Toscana', 'Linguiça artesanal com especiarias e alho', 55.00, 4),
('Coração de Boi', 'Coração bovino fresco para receitas especiais', 38.50, 5),
('Fígado de Boi', 'Fígado bovino de primeira qualidade para preparo', 52.00, 5);

-- 1. SELECT: Produtos com valor maior que R$ 50,00
SELECT * FROM tb_produtos WHERE preco > 50.00;

-- 2. SELECT: Produtos com valor entre R$ 50,00 e R$ 150,00
SELECT * FROM tb_produtos WHERE preco BETWEEN 50.00 AND 150.00;

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

-- 5. SELECT: INNER JOIN filtrando por categoria específica (Aves)
SELECT 
    p.id_produto,
    p.nome_produto,
    p.descricao_produto,
    p.preco,
    c.nome_categoria
FROM tb_produtos p
INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria
WHERE c.nome_categoria = 'Aves';
