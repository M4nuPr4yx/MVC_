-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           12.2.2-MariaDB - MariaDB Server
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.15.0.7171
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para exemplos
DROP DATABASE IF EXISTS `exemplos`;
CREATE DATABASE IF NOT EXISTS `exemplos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `exemplos`;

-- Copiando estrutura para tabela exemplos.acessorios
DROP TABLE IF EXISTS `acessorios`;
CREATE TABLE IF NOT EXISTS `acessorios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `quantidade` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.acessorios: ~0 rows (aproximadamente)
DELETE FROM `acessorios`;

-- Copiando estrutura para tabela exemplos.blusas
DROP TABLE IF EXISTS `blusas`;
CREATE TABLE IF NOT EXISTS `blusas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL DEFAULT '0',
  `marca` varchar(50) NOT NULL DEFAULT '0',
  `cor` varchar(50) NOT NULL DEFAULT '0',
  `tamanho` int(11) NOT NULL DEFAULT 0,
  `genero` varchar(50) NOT NULL DEFAULT '0',
  `preco` decimal(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.blusas: ~0 rows (aproximadamente)
DELETE FROM `blusas`;

-- Copiando estrutura para tabela exemplos.calcas
DROP TABLE IF EXISTS `calcas`;
CREATE TABLE IF NOT EXISTS `calcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL DEFAULT '',
  `numero` int(11) NOT NULL DEFAULT 0,
  `preco` decimal(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.calcas: ~0 rows (aproximadamente)
DELETE FROM `calcas`;

-- Copiando estrutura para tabela exemplos.chinelos
DROP TABLE IF EXISTS `chinelos`;
CREATE TABLE IF NOT EXISTS `chinelos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `cor` varchar(50) DEFAULT NULL,
  `tamanho` int(11) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.chinelos: ~0 rows (aproximadamente)
DELETE FROM `chinelos`;

-- Copiando estrutura para tabela exemplos.pessoas
DROP TABLE IF EXISTS `pessoas`;
CREATE TABLE IF NOT EXISTS `pessoas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_razao_social` varchar(255) NOT NULL,
  `nome_social_fantasia` varchar(255) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `estado` char(2) DEFAULT NULL,
  `pais` varchar(50) DEFAULT 'Brasil',
  `documento` varchar(14) NOT NULL,
  `tipo` enum('CPF','CNPJ') NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `documento` (`documento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.pessoas: ~1 rows (aproximadamente)
DELETE FROM `pessoas`;
INSERT INTO `pessoas` (`id`, `nome_razao_social`, `nome_social_fantasia`, `cep`, `endereco`, `numero`, `bairro`, `cidade`, `estado`, `pais`, `documento`, `tipo`, `email`, `data_cadastro`) VALUES
	(1, 'Hugo santos silva', 'hugo santos silva', '19060030', 'Rua Roberto Mange', '117427404', 'Jardim Marupiara', 'Presidente Prudente', 'SP', 'Brasil', '35072074862', 'CPF', 'hugosilva.@gmail.com', '2026-05-05 12:57:21');

-- Copiando estrutura para tabela exemplos.produtos
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL DEFAULT 0,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `estoque` int(11) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela exemplos.produtos: ~1 rows (aproximadamente)
DELETE FROM `produtos`;
INSERT INTO `produtos` (`id`, `nome`, `descricao`, `preco`, `estoque`, `categoria`) VALUES
	(0, 'costela', 'sbhhhty', 24.00, 1, '3');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
