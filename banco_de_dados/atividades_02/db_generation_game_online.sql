-- Criação do banco de dados
CREATE DATABASE db_generation_game_online
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Seleção do banco de dados
USE db_generation_game_online;

-- Creação da tabela de classes
CREATE TABLE tb_classes (
    id_classe INT AUTO_INCREMENT PRIMARY KEY,
    nome_classe VARCHAR(50) NOT NULL UNIQUE,
    descricao_classe VARCHAR(255),
    poder_magico INT NOT NULL
);

-- Inserção de 5 registros na tabela tb_classes
INSERT INTO tb_classes (nome_classe, descricao_classe, poder_magico) VALUES
('Mago', 'Especialista em magia ofensiva e defensiva', 5000),
('Arqueiro', 'Excelente em ataques à distância com precisão', 2500),
('Guerreiro', 'Combatente melee com alta defesa', 1500),
('Paladino', 'Guerreiro sagrado com habilidades de cura', 3500),
('Assassino', 'Combatente rápido com ataques críticos', 2000);

-- Criação da tabela de personagens
CREATE TABLE tb_personagens (
    id_personagem INT AUTO_INCREMENT PRIMARY KEY,
    nome_personagem VARCHAR(100) NOT NULL,
    poder_ataque INT NOT NULL,
    poder_defesa INT NOT NULL,
    pontos_vida INT NOT NULL,
    id_classe INT NOT NULL,
    
    FOREIGN KEY (id_classe) REFERENCES tb_classes(id_classe)
);

-- Inserção de 8 registros na tabela tb_personagens
INSERT INTO tb_personagens (nome_personagem, poder_ataque, poder_defesa, pontos_vida, id_classe) VALUES
('Aldrin - O Mago Sombrio', 2500, 800, 3000, 1),
('Lydia - Arqueira das Flores', 2200, 1200, 2500, 2),
('Conan - Guerreiro Lendário', 1800, 2500, 4500, 3),
('Cassidy - Paladino da Luz', 2000, 2200, 4000, 4),
('Zephyr - Mago do Fogo', 2800, 900, 2800, 1),
('Cratos - Assassino Silencioso', 2400, 1500, 2200, 5),
('Baldrick - Guerreiro de Aço', 1900, 2800, 5000, 3),
('Elara - Paladina Curadora', 1600, 2100, 3500, 4);

-- ================================================
-- CONSULTAS (SELECTS)
-- ================================================

-- 1. SELECT: Personagens com poder de ataque maior que 2000
SELECT * FROM tb_personagens WHERE poder_ataque > 2000;

-- 2. SELECT: Personagens com poder de defesa entre 1000 e 2000
SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000;

-- 3. SELECT: Personagens com a letra 'C' no nome (LIKE)
SELECT * FROM tb_personagens WHERE nome_personagem LIKE '%C%';

-- 4. SELECT: INNER JOIN entre tb_personagens e tb_classes
SELECT 
    p.id_personagem,
    p.nome_personagem,
    p.poder_ataque,
    p.poder_defesa,
    p.pontos_vida,
    c.nome_classe,
    c.descricao_classe,
    c.poder_magico
FROM tb_personagens p
INNER JOIN tb_classes c ON p.id_classe = c.id_classe;

-- 5. SELECT: INNER JOIN filtrando por classe específica (Arqueiro)
SELECT 
    p.id_personagem,
    p.nome_personagem,
    p.poder_ataque,
    p.poder_defesa,
    p.pontos_vida,
    c.nome_classe
FROM tb_personagens p
INNER JOIN tb_classes c ON p.id_classe = c.id_classe
WHERE c.nome_classe = 'Arqueiro';
