use test;
show tables;

select * from employee_account;
select * from driver_application;
SELECT MAX(id) FROM driver_application;
SELECT  SCOPE_IDENTITY();
drop table driver_application;
drop table preferred_area;
drop table available_work_time;
drop table transportation_method;
CREATE TABLE `driver_application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `street_address` varchar(30) NOT NULL,
  `city` varchar(20) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `self_comment` text NOT NULL,
  `resume` blob NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `preferred_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `join_us_id` int(11) NOT NULL,
  `lan_mark` varchar(1) NOT NULL,
  `desired_area` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
select * from transportation_method;
select * from preferred_area;
drop table available_work_time;
CREATE TABLE `available_work_time` (
  `join_us_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lan_mark` varchar(1) NOT NULL,
  `available_time` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
select * from available_work_time;
ALTER TABLE preferred_area AUTO_INCREMENT=1;
CREATE TABLE `transportation_method` (
  `join_us_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lan_mark` varchar(1) NOT NULL,
  `transportation` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `partner_application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `business_name` varchar(20) NOT NULL,
  `street_address` varchar(10) NOT NULL,
  `city` varchar(10) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `business_category` text NOT NULL,
  `business_description` text NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
select * from partner_application;

CREATE TABLE `advertisement_application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `business_name` varchar(20) NOT NULL,
  `street_address` varchar(10) NOT NULL,
  `city` varchar(10) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `business_category` text NOT NULL,
  `business_description` text NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
select * from advertisement_application;
drop table article;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datewithtime` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `date` text AS (date_format((DATE(datewithtime)), '%M %d %Y')),
  `user` varchar(30)  NULL,
  `type` varchar(20) NOT NULL,
  `lan_mark` varchar(100)  NULL,
  `title` varchar(40) NOT NULL,
  `cover` varchar(100)  NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

select * from article;