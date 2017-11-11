


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



CREATE USER 'wfuser'@'172.18.0.3' IDENTIFIED BY '0ny7GTGYSGV7534POIQImx9JHDSFGggcf26UYyhsg67';

GRANT SELECT , INSERT , UPDATE , DELETE ON `webforge` . * TO 'wfuser'@'172.18.0.3';

USE    `webforge`

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База даних: `webforge`
--

-- --------------------------------------------------------

--
-- Структура таблиці `sa3dp5opkdn8`
--

CREATE TABLE IF NOT EXISTS `sa3dp5opkdn8` (
  `p2opiujdn` varchar(100) NOT NULL,
  `oiukmm98` varchar(65) NOT NULL,
  UNIQUE KEY `oiukmm98` (`oiukmm98`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
-- --------------------------------------------------------

--
-- Структура таблиці `user_yiutr6`
--

CREATE TABLE IF NOT EXISTS `user_yiutr6` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100)  NOT NULL,
  `email` varchar(150) NOT NULL,
  `passw` varchar(255) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `photo` decimal(5,4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
