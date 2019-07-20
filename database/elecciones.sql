-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 07, 2018 at 06:50 PM
-- Server version: 5.6.36-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ariemst1_elecciones`
--

-- --------------------------------------------------------

--
-- Table structure for table `centros`
--

CREATE TABLE `centros` (
  `id_centro` int(11) NOT NULL,
  `nombre_centro` varchar(250) COLLATE utf8_spanish2_ci NOT NULL,
  `id_parroquia` int(11) NOT NULL,
  `id_sector` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;


--
-- Table structure for table `coordinadores`
--

CREATE TABLE `coordinadores` (
  `id` int(11) NOT NULL,
  `id_coordinador` int(11) NOT NULL,
  `nombre_coordinador` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido_coordinador` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono_coordinador` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_parroquia` int(11) DEFAULT NULL,
  `zona` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;



--
-- Table structure for table `electores`
--

CREATE TABLE `electores` (
  `id` int(11) NOT NULL,
  `id_elector` int(11) DEFAULT NULL,
  `nombre_elector` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido_elector` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono_elector` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `email_elector` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccion_elector` text COLLATE utf8_spanish2_ci,
  `id_centro` int(11) DEFAULT NULL,
  `twitter` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `instagram` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `sexo` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `id_responsable` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Table structure for table `parroquias`
--

CREATE TABLE `parroquias` (
  `id_parroquia` int(11) NOT NULL,
  `nombre_parroquia` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;



--
-- Table structure for table `perfiles`
--

CREATE TABLE `perfiles` (
  `id` int(11) NOT NULL,
  `id_perfil` int(11) NOT NULL,
  `nombre_perfil` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `perfiles`
--

INSERT INTO `perfiles` (`id`, `id_perfil`, `nombre_perfil`) VALUES
(1, 1, 'ADMINISTRADOR'),
(2, 2, 'SUPERVISOR'),
(3, 3, 'OPERADOR');

-- --------------------------------------------------------

--
-- Table structure for table `responsables`
--

CREATE TABLE `responsables` (
  `id` int(11) NOT NULL,
  `id_responsable` int(11) NOT NULL,
  `nombre_responsable` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido_responsable` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono_responsable` varchar(250) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_sector` int(11) DEFAULT NULL,
  `nombre_sector` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;


--
-- Table structure for table `sectores`
--

CREATE TABLE `sectores` (
  `id_sector` int(11) NOT NULL,
  `nombre_sector` varchar(250) COLLATE utf8_spanish2_ci NOT NULL,
  `id_parroquia` int(11) NOT NULL,
  `zona_sector` varchar(250) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;



--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `pass` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `id_perfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `nombre`, `pass`, `id_perfil`) VALUES
(2, 'ADMIN', 'ADMIN', '601f1889667efaebb33b8c12572835da3f027f78', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `centros`
--
ALTER TABLE `centros`
  ADD PRIMARY KEY (`id_centro`),
  ADD UNIQUE KEY `id_centro_votacion` (`id_centro`);

--
-- Indexes for table `coordinadores`
--
ALTER TABLE `coordinadores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `electores`
--
ALTER TABLE `electores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_elector` (`id_elector`),
  ADD KEY `id_elector_2` (`id_elector`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `parroquias`
--
ALTER TABLE `parroquias`
  ADD PRIMARY KEY (`id_parroquia`),
  ADD UNIQUE KEY `id_parroquia` (`id_parroquia`);

--
-- Indexes for table `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `id_perfil` (`id_perfil`);

--
-- Indexes for table `responsables`
--
ALTER TABLE `responsables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sectores`
--
ALTER TABLE `sectores`
  ADD UNIQUE KEY `id_sector` (`id_sector`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `centros`
--
ALTER TABLE `centros`
  MODIFY `id_centro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
--
-- AUTO_INCREMENT for table `coordinadores`
--
ALTER TABLE `coordinadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `electores`
--
ALTER TABLE `electores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6591;
--
-- AUTO_INCREMENT for table `parroquias`
--
ALTER TABLE `parroquias`
  MODIFY `id_parroquia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `responsables`
--
ALTER TABLE `responsables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;
--
-- AUTO_INCREMENT for table `sectores`
--
ALTER TABLE `sectores`
  MODIFY `id_sector` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
