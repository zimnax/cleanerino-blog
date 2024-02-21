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
-- Table structure for table `prod_certificate`
--

DROP TABLE IF EXISTS `prod_certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prod_certificate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int DEFAULT NULL,
  `certif_cat` int DEFAULT NULL,
  `certif_sub_cat` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prod_id` (`prod_id`),
  KEY `certif_cat` (`certif_cat`),
  KEY `certif_sub_cat` (`certif_sub_cat`),
  CONSTRAINT `prod_certificate_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`),
  CONSTRAINT `prod_certificate_ibfk_2` FOREIGN KEY (`certif_cat`) REFERENCES `certification_categories` (`id`),
  CONSTRAINT `prod_certificate_ibfk_3` FOREIGN KEY (`certif_sub_cat`) REFERENCES `certification_subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prod_certificate`
--

LOCK TABLES `prod_certificate` WRITE;
/*!40000 ALTER TABLE `prod_certificate` DISABLE KEYS */;
INSERT INTO `prod_certificate` VALUES (1,71,1,1),(2,71,1,2),(3,71,2,3),(4,71,2,4),(5,71,2,5),(6,71,2,6),(7,72,1,1),(8,75,1,2),(9,75,1,1);
/*!40000 ALTER TABLE `prod_certificate` ENABLE KEYS */;
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
