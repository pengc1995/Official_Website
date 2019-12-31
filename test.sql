DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE `company_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `class` varchar(10) NOT NULL,
  `cover` varchar(100) NOT NULL,
  `title` varchar(40) NOT NULL,
  `content` text NOT NULL,
  `clicks` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `user` varchar(20) NOT NULL,
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

CREATE TABLE `company_recruitment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(20) NOT NULL,
  `department` varchar(45) NOT NULL,
  `position` varchar(35) NOT NULL,
  `brief` text NOT NULL,
  `responsibilities` text NULL,
  `requirements` text NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `available_work_time` (
  `join_us_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `available_time` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `join_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `street_address` varchar(70) NOT NULL,
  `city` varchar(30) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `mobile_phone` varchar(12) NOT NULL,
  `work_type` varchar(20) NOT NULL,
  `available_work_time` varchar(140) NULL,
  `self_comment` text NOT NULL,
  `resume` blob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

