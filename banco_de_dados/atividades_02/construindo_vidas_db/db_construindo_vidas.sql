-- Criação do banco de dados
CREATE DATABASE db_construindo_vidas
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Seleção do banco de dados
USE db_construindo_vidas;

-- Criação da tabela de categorias de produtos
CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao_categoria VARCHAR(255)
);

-- Inserção de 5 registros na tabela tb_categorias
INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Hidráulica', 'Tubos, conexões e acessórios para instalações hidráulicas'),
('Elétrica', 'Fios, cabos, disjuntores e materiais elétricos diversos'),
('Revestimento', 'Azulejos, porcelanatos e revestimentos para paredes e pisos'),
('Ferragens', 'Fechaduras, dobradiças, puxadores e outros acessórios metálicos'),
('Tintas e Vernizes', 'Tintas de qualidade superior e vernizes para diversos acabamentos');

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
('Cano PVC 20mm', 'Tubo PVC de 20mm para água fria de primeira qualidade', 45.00, 1),
('Conexão 90º Latão', 'Conexão de latão rosqueável 90 graus para encanações', 85.50, 1),
('Fio 2.5mm Preto', 'Fio elétrico de cobre 2.5mm com isolamento de qualidade', 95.00, 2),
('Disjuntor 32A', 'Disjuntor de segurança 32 amperes para proteção elétrica', 120.00, 2),
('Cerâmica Branca 30x30', 'Cerâmica branca 30x30cm para pisos e paredes', 65.00, 3),
('Porcelanato Cinzento', 'Porcelanato cinzento 60x60cm com acabamento brilhante', 155.00, 3),
('Fechadura de Cilindro', 'Fechadura de cilindro com chave para portas internas', 78.90, 4),
('Dobradiça de Aço Cromado', 'Dobradiça de aço cromado resistente para portas pesadas', 112.50, 4);

-- 1. SELECT: Produtos com valor maior que R$ 100,00
SELECT * FROM tb_produtos WHERE preco > 100.00;

-- 2. SELECT: Produtos com valor entre R$ 70,00 e R$ 150,00
SELECT * FROM tb_produtos WHERE preco BETWEEN 70.00 AND 150.00;

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

-- 5. SELECT: INNER JOIN filtrando por categoria específica (Hidráulica)
SELECT 
    p.id_produto,
    p.nome_produto,
    p.descricao_produto,
    p.preco,
    c.nome_categoria
FROM tb_produtos p
INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria
WHERE c.nome_categoria = 'Hidráulica';
