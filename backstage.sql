DROP DATABASE IF EXISTS backstage;

CREATE DATABASE backstage;

USE backstage;

CREATE TABLE `user` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(30) NOT NULL,
    `password` varchar(20) NOT NULL,
    `admin` varchar(20),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datewithtime` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `date` text AS (date_format((DATE(datewithtime)), '%M %d %Y')),
  `user` varchar(30) NOT NULL,
  `type` varchar(4) NOT NULL,
  `lan_mark` varchar(1) NOT NULL,
  `title` varchar(40) NOT NULL,
  `cover` varchar(100) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `position_resp` (
  `position_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `position_req` (
  `position_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `career_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datewithtime` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `date` text AS (date_format((DATE(datewithtime)), '%M %d %Y')),
  `area` varchar(20) NOT NULL,
  `lan_mark` varchar(1) NOT NULL,
  `hot` varchar(1),
  `position` varchar(35) NOT NULL,
  `brief` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

