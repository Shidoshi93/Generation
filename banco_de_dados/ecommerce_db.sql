-- Criar o banco de dados do e-commerce
CREATE DATABASE ecommerce_db
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Seleção do banco de dados
USE ecommerce_db;

-- Criar a tabela de produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    estoque INT NOT NULL,
    descricao TEXT
);

-- Inserir dados na tabela produtos
INSERT INTO produtos (nome, preco, categoria, estoque, descricao) VALUES
('Smartphone Samsung Galaxy', 899.99, 'Eletrônicos', 50, 'Smartphone com tela de 6.1 polegadas'),
('Notebook Lenovo IdeaPad', 1299.00, 'Informática', 25, 'Notebook com processador Intel i5'),
('Tênis Nike Air Max', 349.90, 'Calçados', 80, 'Tênis esportivo para corrida'),
('Camiseta Polo', 89.99, 'Roupas', 120, 'Camiseta polo 100% algodão'),
('Smart TV 55 polegadas', 1899.99, 'Eletrônicos', 15, 'Smart TV 4K com HDR'),
('Fone de Ouvido Bluetooth', 199.99, 'Eletrônicos', 60, 'Fone wireless com cancelamento de ruído'),
('Livro Programação Python', 79.90, 'Livros', 40, 'Guia completo de programação Python'),
('Mesa de Escritório', 459.00, 'Móveis', 10, 'Mesa de escritório com gavetas');

-- SELECT para produtos com valor maior que 500
SELECT * FROM produtos WHERE preco > 500;

-- SELECT para produtos com valor menor que 500
SELECT * FROM produtos WHERE preco < 500;

-- Atualizar um registro da tabela
UPDATE produtos 
SET preco = 999.99, estoque = 45 
WHERE id = 1;

-- SELECT de todos os produtos
SELECT * FROM produtos;




