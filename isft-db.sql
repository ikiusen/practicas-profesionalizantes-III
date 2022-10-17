-- Adminer 4.8.1 MySQL 5.5.5-10.3.36-MariaDB-0+deb10u2 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `isft-db`;
CREATE DATABASE `isft-db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `isft-db`;

DELIMITER ;;

CREATE PROCEDURE `usp_create_action`(IN `name` varchar(75), IN `description` varchar(128))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
        INSERT INTO action(name, description) VALUES (name, description);
   COMMIT;
END;;

CREATE PROCEDURE `usp_create_group`(IN `name` varchar(75), IN `description` varchar(128))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
        INSERT INTO `group`(name, description) VALUES (name, description);
   COMMIT;
END;;

CREATE PROCEDURE `usp_create_group_permissions`(IN `group_id` int, IN `action_id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
    INSERT INTO group_permissions(group_id, action_id) VALUES (group_id, action_id);
    COMMIT;
END;;

CREATE PROCEDURE `usp_create_group_user_members`(IN `group_id` int, IN `user_id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
    INSERT INTO group_user_members(group_id, user_id) VALUES (group_id, user_id);
    COMMIT;
END;;

CREATE PROCEDURE `usp_create_user`(IN `username` varchar(75), IN `password` varchar(256))
BEGIN
DECLARE user_id INT DEFAULT 0;
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
        INSERT INTO user(username, password) VALUES (username, password);
        SET user_id = LAST_INSERT_ID();
        CALL `usp-create-group-member`(user_id, 2);
   COMMIT;
END;;

CREATE PROCEDURE `usp_create_user_information`(IN `user_id` int, IN `name` varchar(75), IN `surname` varchar(75), IN `dni` varchar(45), IN `email` varchar(75))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
        INSERT INTO user_information(user_id, name, surname, dni, email) VALUES (user_id, name, surname, dni, email);
   COMMIT;
END;;

CREATE PROCEDURE `usp_delete_action`(IN `id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
   UPDATE action SET action.is_deleted = 1 WHERE action.id = id;
   COMMIT;
END;;

CREATE PROCEDURE `usp_delete_group`(IN `id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
   UPDATE `group` SET `group`.is_deleted = 1 WHERE `group`.id = id;
   COMMIT;
END;;

CREATE PROCEDURE `usp_delete_group_permissions`(IN `group_id` int, IN `action_id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
    DELETE FROM group_permissions WHERE group_permissions.group_id = group_id AND group_permissions.action_id = action_id;
    COMMIT;
END;;

CREATE PROCEDURE `usp_delete_group_user_members`(IN `group_id` int, IN `user_id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
    DELETE FROM group_user_members WHERE group_user_members.group_id = group_id AND group_user_members.user_id = user_id;
    COMMIT;
END;;

CREATE PROCEDURE `usp_delete_user`(IN `id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
    UPDATE user SET user.is_deleted = 1 WHERE user.id = id;
    COMMIT;
END;;

CREATE PROCEDURE `usp_delete_user_information`(IN `user_id` int)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
        DELETE FROM user_information WHERE user_information.user_id = user_id;
   COMMIT;
END;;

CREATE PROCEDURE `usp_getAll_action`()
SELECT * FROM view_action;;

CREATE PROCEDURE `usp_getAll_group`()
SELECT * FROM view_group;;

CREATE PROCEDURE `usp_getAll_group_permissions`()
SELECT * FROM view_group_permissions;;

CREATE PROCEDURE `usp_getAll_group_user_members`()
SELECT * FROM view_group_user_members;;

CREATE PROCEDURE `usp_getAll_user`()
SELECT * FROM view_user;;

CREATE PROCEDURE `usp_getAll_user_information`()
SELECT * FROM view_user_information;;

CREATE PROCEDURE `usp_get_action`(IN `id` int)
SELECT * FROM view_action WHERE view_action.id = id;;

CREATE PROCEDURE `usp_get_group`(IN `id` int)
SELECT * FROM view_group WHERE view_group.id = id;;

CREATE PROCEDURE `usp_get_group_permissions`(IN `group_id` int)
SELECT * FROM view_group_permissions WHERE view_group_permissions.group_id = group_id;;

CREATE PROCEDURE `usp_get_group_user_members`(IN `group_id` int)
SELECT * FROM view_group_user_members WHERE view_group_user_members.group_id = group_id;;

CREATE PROCEDURE `usp_get_user`(IN `id` int)
SELECT * FROM view_user WHERE view_user.id = id;;

CREATE PROCEDURE `usp_get_user_information`(IN `user_id` int)
SELECT * FROM view_user_information WHERE view_user_information.user_id;;

CREATE PROCEDURE `usp_update_action`(IN `id` int, IN `name` varchar(75), IN `description` varchar(128))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
         UPDATE action SET action.name = name, action.description = description WHERE action.id = id;
    COMMIT;
END;;

CREATE PROCEDURE `usp_update_group`(IN `id` int, IN `name` varchar(75), IN `description` varchar(128))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
         UPDATE `group` SET `group`.name = name, `group`.description = description WHERE `group`.id = id;
    COMMIT;
END;;

CREATE PROCEDURE `usp_update_user`(IN `id` int, IN `username` varchar(75), IN `password` varchar(256))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
    START TRANSACTION;
    UPDATE user SET user.username = username , user.password = password WHERE user.id = id;
    COMMIT;
END;;

CREATE PROCEDURE `usp_update_user_information`(IN `user_id` int, IN `name` varchar(75), IN `surname` varchar(75), IN `dni` varchar(45), IN `email` varchar(75))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
   BEGIN
            ROLLBACK;
            RESIGNAL;
   END;
   START TRANSACTION;
        UPDATE user_information SET user_information.name = name, user_information.surname = surname,
   user_information.dni = dni, user_information.email = email WHERE user_information.user_id = user_id; 
   COMMIT;
END;;

DELIMITER ;

DROP TABLE IF EXISTS `action`;
CREATE TABLE `action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `action`;

DROP TABLE IF EXISTS `audit`;
CREATE TABLE `audit` (
  `user_id` int(11) NOT NULL,
  `action` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `audit`;

DROP TABLE IF EXISTS `degree`;
CREATE TABLE `degree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `resolution` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `degree`;

DROP TABLE IF EXISTS `degree_subjects`;
CREATE TABLE `degree_subjects` (
  `degree_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  KEY `fk_degree_subjects_degree1_idx` (`degree_id`),
  KEY `fk_degree_subjects_subject1_idx` (`subject_id`),
  CONSTRAINT `fk_degree_subjects_degree1` FOREIGN KEY (`degree_id`) REFERENCES `degree` (`id`),
  CONSTRAINT `fk_degree_subjects_subject1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `degree_subjects`;

DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `group`;
INSERT INTO `group` (`id`, `name`, `description`, `is_deleted`) VALUES
(1,	'Administrator',	'Full set of permissions',	0),
(2,	'Guest',	'No permissions',	0);

DROP TABLE IF EXISTS `group_permissions`;
CREATE TABLE `group_permissions` (
  `group_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  KEY `fk_group_actions_group1_idx` (`group_id`),
  KEY `fk_group_actions_action1_idx` (`action_id`),
  CONSTRAINT `fk_group_actions_action1` FOREIGN KEY (`action_id`) REFERENCES `action` (`id`),
  CONSTRAINT `fk_group_actions_group1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `group_permissions`;

DROP TABLE IF EXISTS `group_user_members`;
CREATE TABLE `group_user_members` (
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  KEY `fk_group_user_members_group1_idx` (`group_id`),
  KEY `fk_group_user_members_user1_idx` (`user_id`),
  CONSTRAINT `fk_group_user_members_group1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`),
  CONSTRAINT `fk_group_user_members_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `group_user_members`;

DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `year` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `subject`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `user`;

DROP TABLE IF EXISTS `user_information`;
CREATE TABLE `user_information` (
  `user_id` int(11) NOT NULL,
  `name` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `dni` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `mail_UNIQUE` (`email`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `fk_user_information_user_idx` (`user_id`),
  CONSTRAINT `fk_user_information_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `user_information`;

DROP TABLE IF EXISTS `user_session`;
CREATE TABLE `user_session` (
  `user_id` int(11) NOT NULL,
  `token` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `expires` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `token_UNIQUE` (`token`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `fk_user_session_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_session_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

TRUNCATE `user_session`;

DROP VIEW IF EXISTS `view_action`;
CREATE TABLE `view_action` (`id` int(11), `name` varchar(75), `description` varchar(128));


DROP VIEW IF EXISTS `view_group`;
CREATE TABLE `view_group` (`id` int(11), `name` varchar(75), `description` varchar(128));


DROP VIEW IF EXISTS `view_group_permissions`;
CREATE TABLE `view_group_permissions` (`group_id` varchar(75), `group_name` varchar(75), `group_description` varchar(128), `action_name` varchar(75), `action_description` varchar(128));


DROP VIEW IF EXISTS `view_group_user_members`;
CREATE TABLE `view_group_user_members` (`group_id` int(11), `group_name` varchar(75), `group_description` varchar(128), `username` varchar(75));


DROP VIEW IF EXISTS `view_user`;
CREATE TABLE `view_user` (`id` int(11), `username` varchar(75));


DROP VIEW IF EXISTS `view_user_information`;
CREATE TABLE `view_user_information` (`user_id` int(11), `name` varchar(75), `surname` varchar(75), `dni` varchar(45), `email` varchar(75));


DROP TABLE IF EXISTS `view_action`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_action` AS select `action`.`id` AS `id`,`action`.`name` AS `name`,`action`.`description` AS `description` from `action` where `action`.`is_deleted` = 0;

DROP TABLE IF EXISTS `view_group`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_group` AS select `group`.`id` AS `id`,`group`.`name` AS `name`,`group`.`description` AS `description` from `group` where `group`.`is_deleted` = 0;

DROP TABLE IF EXISTS `view_group_permissions`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_group_permissions` AS select `group`.`name` AS `group_id`,`group`.`name` AS `group_name`,`group`.`description` AS `group_description`,`action`.`name` AS `action_name`,`action`.`description` AS `action_description` from ((`group` join `group_permissions` on(`group_permissions`.`group_id` = `group`.`id`)) join `action` on(`group_permissions`.`action_id` = `action`.`id`)) where `group`.`is_deleted` = 0 and `action`.`is_deleted` = 0;

DROP TABLE IF EXISTS `view_group_user_members`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_group_user_members` AS select `group`.`id` AS `group_id`,`group`.`name` AS `group_name`,`group`.`description` AS `group_description`,`user`.`username` AS `username` from ((`group` join `group_user_members` on(`group`.`id` = `group_user_members`.`group_id`)) join `user` on(`group_user_members`.`user_id` = `user`.`id`)) where `group`.`is_deleted` = 0 and `user`.`is_deleted` = 0;

DROP TABLE IF EXISTS `view_user`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_user` AS select `user`.`id` AS `id`,`user`.`username` AS `username` from `user` where `user`.`is_deleted` = 0;

DROP TABLE IF EXISTS `view_user_information`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `view_user_information` AS select `user_information`.`user_id` AS `user_id`,`user_information`.`name` AS `name`,`user_information`.`surname` AS `surname`,`user_information`.`dni` AS `dni`,`user_information`.`email` AS `email` from (`user_information` join `user` on(`user_information`.`user_id` = `user`.`id`)) where `user`.`is_deleted` = 0;

-- 2022-10-17 14:06:56
