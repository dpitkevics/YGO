-- phpMyAdmin SQL Dump
-- version 2.11.9.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 10, 2012 at 03:28 PM
-- Server version: 5.1.53
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `test-port`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards_on_hand`
--

CREATE TABLE IF NOT EXISTS `cards_on_hand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `cards_on_hand`
--


-- --------------------------------------------------------

--
-- Table structure for table `con_list`
--

CREATE TABLE IF NOT EXISTS `con_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `conid` int(11) NOT NULL,
  `cardid` int(11) NOT NULL,
  `player` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `con_list`
--


-- --------------------------------------------------------

--
-- Table structure for table `deck`
--

CREATE TABLE IF NOT EXISTS `deck` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8_latvian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `deck`
--


-- --------------------------------------------------------

--
-- Table structure for table `deck_cards`
--

CREATE TABLE IF NOT EXISTS `deck_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deckid` int(11) NOT NULL,
  `cardid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `deck_cards`
--


-- --------------------------------------------------------

--
-- Table structure for table `deck_left`
--

CREATE TABLE IF NOT EXISTS `deck_left` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `deck_left`
--


-- --------------------------------------------------------

--
-- Table structure for table `dl_cards`
--

CREATE TABLE IF NOT EXISTS `dl_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dlid` int(11) NOT NULL,
  `cardid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `dl_cards`
--


-- --------------------------------------------------------

--
-- Table structure for table `extendable_fields`
--

CREATE TABLE IF NOT EXISTS `extendable_fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fusionid` int(11) NOT NULL,
  `graveid` int(11) NOT NULL,
  `deckid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `extendable_fields`
--


-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE IF NOT EXISTS `field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `1-t-1` int(11) NOT NULL,
  `2-t-1` int(11) NOT NULL,
  `3-t-1` int(11) NOT NULL,
  `4-t-1` int(11) NOT NULL,
  `5-t-1` int(11) NOT NULL,
  `6-t-1` int(11) NOT NULL,
  `7-t-1` int(11) NOT NULL,
  `1-b-1` int(11) NOT NULL,
  `2-b-1` int(11) NOT NULL,
  `3-b-1` int(11) NOT NULL,
  `4-b-1` int(11) NOT NULL,
  `5-b-1` int(11) NOT NULL,
  `6-b-1` int(11) NOT NULL,
  `7-b-1` int(11) NOT NULL,
  `1-t-2` int(11) NOT NULL,
  `2-t-2` int(11) NOT NULL,
  `3-t-2` int(11) NOT NULL,
  `4-t-2` int(11) NOT NULL,
  `5-t-2` int(11) NOT NULL,
  `6-t-2` int(11) NOT NULL,
  `7-t-2` int(11) NOT NULL,
  `1-b-2` int(11) NOT NULL,
  `2-b-2` int(11) NOT NULL,
  `3-b-2` int(11) NOT NULL,
  `4-b-2` int(11) NOT NULL,
  `5-b-2` int(11) NOT NULL,
  `6-b-2` int(11) NOT NULL,
  `7-b-2` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `field`
--


-- --------------------------------------------------------

--
-- Table structure for table `fusion`
--

CREATE TABLE IF NOT EXISTS `fusion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NOT NULL,
  `cardid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `fusion`
--


-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE IF NOT EXISTS `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid_1` int(11) NOT NULL,
  `userid_2` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `games`
--


-- --------------------------------------------------------

--
-- Table structure for table `grave`
--

CREATE TABLE IF NOT EXISTS `grave` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NOT NULL,
  `cardid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `grave`
--


-- --------------------------------------------------------

--
-- Table structure for table `tmp_games`
--

CREATE TABLE IF NOT EXISTS `tmp_games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid_1` int(11) NOT NULL,
  `userid_2` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tmp_games`
--


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'User ID',
  `fname` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'First Name',
  `lname` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'Last Name',
  `email` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'User email',
  `password` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'Password',
  `nickname` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'Nickaname',
  `won` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'Number of Games Won',
  `lost` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'Number of Games Lost',
  `draw` varchar(128) COLLATE utf8_latvian_ci NOT NULL COMMENT 'Number of Games Draw',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'User registered',
  `deckid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_latvian_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `nickname`, `won`, `lost`, `draw`, `timestamp`, `deckid`) VALUES
(1, 'Daniels', 'Pitkevičs', 'daniels.pitkevics@gmail.com', '6a5cdcee9f2ee619165b13489cab053c', 'daniels', '0', '0', '0', '2012-08-08 19:28:43', 1),
(2, 'John', 'Smith', 'john@smith.com', '6e0b7076126a29d5dfcbd54835387b7b', 'johny', '0', '0', '0', '2012-08-08 19:29:24', 2);
