-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: cleanerino
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `firebase_id` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `brand_description` text,
  `banner` varchar(255) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `city` int DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `returns` enum('true','false') DEFAULT NULL,
  `refunds` enum('true','false') DEFAULT NULL,
  `my_brand_id` int DEFAULT NULL,
  `payout_details_id` int DEFAULT NULL,
  `video` varchar(500) DEFAULT NULL,
  `shipping` enum('true','false') NOT NULL DEFAULT 'false',
  `pickup` enum('true','false') NOT NULL DEFAULT 'false',
  `free_shipping` enum('true','false') NOT NULL DEFAULT 'false',
  `free_shipping_price` int DEFAULT NULL,
  `country` int DEFAULT NULL,
  `pick_up_address` longtext,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `my_brand_id` (`my_brand_id`),
  KEY `payout_details_id` (`payout_details_id`),
  CONSTRAINT `vendors_ibfk_1` FOREIGN KEY (`my_brand_id`) REFERENCES `my_brand_is` (`id`),
  CONSTRAINT `vendors_ibfk_2` FOREIGN KEY (`payout_details_id`) REFERENCES `payout_d` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
INSERT INTO `vendors` VALUES (2,'Taras','Yaras','jakzadarom2@gmail.com','Brand ','0YhNpDBUgvN2dAEiP7xrC3ElTda2','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2F2023-11-23%2018.59.56.jpg?alt=media&token=b906c1ef-41a1-491d-bfe0-b6ff25c8bb88','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2FpayPalTwo.png?alt=media&token=f6712dad-0fe8-4bb3-b593-52c714c27bce','Brand description','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fzbir-koshtiv-dlja-potreb-vijskovih-meshkanciv-gromadi-f71acdc.png?alt=media&token=003b9b12-62fe-4511-bd7c-91ba7e3df024',1440,111893,'Pasichna','90098','true',NULL,5,2,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fnew-york%20(5).mp4?alt=media&token=2a6ed2cc-25af-4fc6-a0be-48950a05df56','true','true','true',24,233,'United States, Indiana, Batesville, Pasichna, ZIP: 90098','0930125618');
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-20 21:48:38
