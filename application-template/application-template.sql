-- Adminer 4.8.1 MySQL 5.5.5-10.3.36-MariaDB-0+deb10u1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `application-template`;
CREATE DATABASE `application-template` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `application-template`;

DELIMITER ;;

CREATE PROCEDURE `authenticate_user`(IN `username` varchar(45), IN `password` varchar(45))
SELECT id FROM user
WHERE user.name = username AND user.password = password;;

CREATE PROCEDURE `create_user_session`(IN `id_user` int, IN `token` varchar(256))
BEGIN
INSERT INTO user_session(token, created, expires, id_user) 
VALUES (token, NOW(), DATE_ADD(NOW(), INTERVAL 1 DAY), id_user);
END;;

DELIMITER ;

DROP TABLE IF EXISTS `action`;
CREATE TABLE `action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `group` (`id`, `name`, `description`) VALUES
(1,	'Administrator',	'Grupo que habilita todos los permisos'),
(2,	'Nobody',	'Grupo ficticio que no otorga ningún permiso'),
(3,	'Visitor',	'Grupo con permisos restringidos');

DROP TABLE IF EXISTS `group_permissions`;
CREATE TABLE `group_permissions` (
  `id_group` int(11) NOT NULL,
  `id_action` int(11) NOT NULL,
  KEY `id_group` (`id_group`),
  KEY `id_action` (`id_action`),
  CONSTRAINT `group_permissions_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `group` (`id`),
  CONSTRAINT `group_permissions_ibfk_2` FOREIGN KEY (`id_action`) REFERENCES `action` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `group_user_members`;
CREATE TABLE `group_user_members` (
  `id_user` int(11) NOT NULL,
  `id_group` int(11) NOT NULL,
  KEY `id_user` (`id_user`),
  KEY `id_group` (`id_group`),
  CONSTRAINT `group_user_members_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `group_user_members_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `group_user_members` (`id_user`, `id_group`) VALUES
(8,	3),
(11,	3),
(14,	3),
(19,	3);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(8,	'Gabriel',	'asdjfhiaosñghasñg'),
(11,	'Juan',	'2341234123'),
(14,	'Romina',	'1234'),
(19,	'Ezequiel',	'soifhdasñfjhgaf');

DROP TABLE IF EXISTS `user_session`;
CREATE TABLE `user_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `expires` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_user` (`id_user`),
  UNIQUE KEY `token` (`token`),
  CONSTRAINT `user_session_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `user_session` (`id`, `token`, `created`, `expires`, `id_user`) VALUES
(4,	'daa6691175c23dd386c90a57d4d309c4f42a472d74ac55c1e114ce2cadfe1b90',	'2022-09-28 19:09:55',	'2022-09-29 19:09:55',	14);

-- 2022-10-04 13:44:07
