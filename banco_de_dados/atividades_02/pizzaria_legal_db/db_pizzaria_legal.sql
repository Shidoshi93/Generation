-- Criação do banco de dados
CREATE DATABASE db_pizzaria_legal
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Seleção do banco de dados
USE db_pizzaria_legal;

-- Criação da tabela de categorias de pizzas
CREATE TABLE tb_categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao_categoria VARCHAR(255)
);

-- Inserção de 5 registros na tabela tb_categorias
INSERT INTO tb_categorias (nome_categoria, descricao_categoria) VALUES
('Tradicional', 'Pizzas clássicas com sabores tradicionais'),
('Premium', 'Pizzas gourmet com ingredientes especiais'),
('Vegetariana', 'Pizzas sem carne com vegetais frescos'),
('Doce', 'Pizzas doces para sobremesa'),
('Especial da Casa', 'Criações exclusivas do chef');

-- Criação da tabela de pizzas
CREATE TABLE tb_pizzas (
    id_pizza INT AUTO_INCREMENT PRIMARY KEY,
    nome_pizza VARCHAR(100) NOT NULL,
    descricao_pizza VARCHAR(255),
    valor DECIMAL(10, 2) NOT NULL,
    id_categoria INT NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),

    -- Adicionando uma restrição para garantir que o preço seja positivo
    CONSTRAINT ck_valor_positivo CHECK (valor > 0)
);

-- Inserção de 8 registros na tabela tb_pizzas
INSERT INTO tb_pizzas (nome_pizza, descricao_pizza, valor, id_categoria) VALUES
('Mozzarella', 'Pizza simples com queijo mozzarella e tomate', 35.00, 1),
('Pepperoni', 'Pizza com molho, queijo e pepperoni', 42.00, 1),
('Margherita Premium', 'Pizza com tomate italiano, mozzarella buffalo e manjericão', 65.00, 2),
('Camarão na Manteiga', 'Pizza gourmet com camarões frescos e alho', 78.50, 2),
('Vegetariana Completa', 'Brócolis, cenoura, abobrinha e espinafre', 48.00, 3),
('Melancia com Calda de Chocolate', 'Pizza doce com melancia fresca e calda de chocolate derretido', 55.00, 4),
('Banana com Canela', 'Pizza doce com banana caramelizada e canela', 52.00, 4),
('Trufa e Bacon', 'Pizza especial com trufa negra, bacon crocante e queijo gouda', 89.90, 5);

-- 1. SELECT: Pizzas com valor maior que R$ 45,00
SELECT * FROM tb_pizzas WHERE valor > 45.00;

-- 2. SELECT: Pizzas com valor entre R$ 50,00 e R$ 100,00
SELECT * FROM tb_pizzas WHERE valor BETWEEN 50.00 AND 100.00;

-- 3. SELECT: Pizzas com a letra 'M' no nome (LIKE)
SELECT * FROM tb_pizzas WHERE nome_pizza LIKE '%M%';

-- 4. SELECT: INNER JOIN entre tb_pizzas e tb_categorias
SELECT 
    p.id_pizza,
    p.nome_pizza,
    p.descricao_pizza,
    p.valor,
    c.nome_categoria,
    c.descricao_categoria
FROM tb_pizzas p
INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria;

-- 5. SELECT: INNER JOIN filtrando por categoria específica (Doce)
SELECT 
    p.id_pizza,
    p.nome_pizza,
    p.descricao_pizza,
    p.valor,
    c.nome_categoria
FROM tb_pizzas p
INNER JOIN tb_categorias c ON p.id_categoria = c.id_categoria
WHERE c.nome_categoria = 'Doce';
