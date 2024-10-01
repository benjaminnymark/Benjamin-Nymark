-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 28, 2022 at 02:10 PM
-- Server version: 5.7.36-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mats`
--

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `film_id` int(11) NOT NULL,
  `filmtitel` varchar(255) COLLATE utf8_swedish_ci NOT NULL,
  `speltid` varchar(5) COLLATE utf8_swedish_ci NOT NULL,
  `film_poster` varchar(255) COLLATE utf8_swedish_ci NOT NULL,
  `recension` text COLLATE utf8_swedish_ci NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`film_id`, `filmtitel`, `speltid`, `film_poster`, `recension`, `genre_id`) VALUES
(1, 'Portrait de la jeune fille en feu', '02:01', 'portratt_av_en_kvinna_poster.jpg', '', 1),
(2, 'The Lighthouse', '01:49', 'the_lighthouse_poster.jpg', '', 1),
(3, 'La Paranza dei Bambini\r\n', '01:45', 'paranza_poster.jpg', '', 2),
(4, 'Jumanji', '02:03', 'jumanji_poster.jpg', '', 7),
(5, 'Honey boy', '01:34', 'honey_boy_poster.jpg', '', 1),
(6, 'Knives out', '02:10', 'knives_out_poster.jpg', '', 2),
(7, 'Ad Astra', '02:02', 'adastra_poster.jpg', '', 6),
(8, 'Once upon a time in Hollywood', '02:23', 'hollywood_poster.jpg', '', 3),
(9, 'Black Widow', '02:14', 'black_widow_psoter.jpg', '', 6),
(10, 'Down by Law', '01:47', 'down_by_law_poster.jpg', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `genre_id` int(11) NOT NULL,
  `genrenamn` varchar(255) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`genre_id`, `genrenamn`) VALUES
(1, 'Drama'),
(2, 'Thriller'),
(3, 'Comedy'),
(4, 'Horror'),
(5, 'Documentary'),
(6, 'Science Fiction'),
(7, 'Adventure');

-- --------------------------------------------------------

--
-- Table structure for table `roll_i_film`
--

CREATE TABLE `roll_i_film` (
  `skadespelare_id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `roll_i_film`
--

INSERT INTO `roll_i_film` (`skadespelare_id`, `film_id`) VALUES
(1, 7),
(1, 8),
(2, 8),
(3, 1),
(4, 1),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 4),
(10, 4),
(11, 5),
(12, 5),
(13, 6),
(14, 6),
(15, 6),
(16, 2),
(17, 2),
(18, 2),
(24, 9),
(25, 9),
(26, 10),
(27, 10),
(28, 10);

-- --------------------------------------------------------

--
-- Table structure for table `roll_i_serie`
--

CREATE TABLE `roll_i_serie` (
  `serie_id` int(11) NOT NULL,
  `skadespelare_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `roll_i_serie`
--

INSERT INTO `roll_i_serie` (`serie_id`, `skadespelare_id`) VALUES
(1, 23),
(2, 22),
(2, 21),
(3, 20),
(4, 19);

-- --------------------------------------------------------

--
-- Table structure for table `serie`
--

CREATE TABLE `serie` (
  `serie_id` int(11) NOT NULL,
  `serie_titel` varchar(255) COLLATE utf8_swedish_ci NOT NULL,
  `antal_avsnitt` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `serie`
--

INSERT INTO `serie` (`serie_id`, `serie_titel`, `antal_avsnitt`, `genre_id`) VALUES
(1, 'Chernobyl', 5, 1),
(2, 'Big Little Lies', 14, 1),
(3, 'Fleabag', 12, 3),
(4, 'The Walking Dead', 139, 4);

-- --------------------------------------------------------

--
-- Table structure for table `skadespelare`
--

CREATE TABLE `skadespelare` (
  `skadespelare_id` int(11) NOT NULL,
  `fornamn` varchar(255) COLLATE utf8_swedish_ci NOT NULL,
  `efternamn` varchar(255) COLLATE utf8_swedish_ci NOT NULL,
  `fodelsear` int(11) NOT NULL,
  `skadespelare_bild` varchar(255) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `skadespelare`
--

INSERT INTO `skadespelare` (`skadespelare_id`, `fornamn`, `efternamn`, `fodelsear`, `skadespelare_bild`) VALUES
(1, 'Brad', 'Pitt', 1963, ''),
(2, 'Leonardo', 'DiCaprio', 1974, ''),
(3, 'Noémie', 'Meriant', 1988, ''),
(4, 'Adèle', 'Haenel', 1989, 'adele_haenel.jpg'),
(5, 'Francesco', 'Di Napoli', 2000, ''),
(6, 'Viviana', 'Aprea', 2000, ''),
(7, 'Karen', 'Gillan', 1987, 'karen_gillan.jpg'),
(8, 'Dwayne', 'Johnson', 1972, ''),
(9, 'Kevin', 'Hart', 1979, ''),
(10, 'Jack', 'Black', 1969, ''),
(11, 'Shia', 'LaBeouf', 1986, ''),
(12, 'Lucas', 'Hedges', 1996, ''),
(13, 'Daniel', 'Craig', 1968, ''),
(14, 'Toni ', 'Collette', 1972, 'toni_colette.jpg'),
(15, 'Liv', 'Tyler', 1977, ''),
(16, 'Willem', 'Dafoe', 1955, ''),
(17, 'Robert', 'Pattinson', 1986, ''),
(18, 'Valeriia', 'Karaman', 1994, ''),
(19, 'Norman', 'Reedus', 1969, ''),
(20, 'Phoebe', 'Waller-Bridge', 1985, ''),
(21, 'Nicole', 'Kidman', 1967, ''),
(22, 'Zoë', 'Kravitz', 1988, ''),
(23, 'Stellan', 'Skarsgård', 1951, 'stellan_skarsgard.jpg'),
(24, 'Scarlett', 'Johansson', 1984, 'scarlett_johansson.jpg'),
(25, 'Florence', 'Pugh', 1996, 'florence_pugh.jpg'),
(26, 'Tom', 'Waits', 1949, 'tom_waits.jpg'),
(27, 'John', 'Lurie', 1952, 'john_lurie.jpg'),
(28, 'Roberto', 'Benigni', 1952, 'roberto_benigni.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`film_id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `roll_i_film`
--
ALTER TABLE `roll_i_film`
  ADD PRIMARY KEY (`skadespelare_id`,`film_id`);

--
-- Indexes for table `serie`
--
ALTER TABLE `serie`
  ADD PRIMARY KEY (`serie_id`);

--
-- Indexes for table `skadespelare`
--
ALTER TABLE `skadespelare`
  ADD PRIMARY KEY (`skadespelare_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `film_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `serie`
--
ALTER TABLE `serie`
  MODIFY `serie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `skadespelare`
--
ALTER TABLE `skadespelare`
  MODIFY `skadespelare_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
