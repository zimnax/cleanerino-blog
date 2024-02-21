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
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `file` longtext,
  `type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `files_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (34,71,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fauto.webp?alt=media&token=1a92fe38-2b07-411c-a8b0-4a837419d12a','photo'),(35,71,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2FforAb.webp?alt=media&token=5e1568d4-dc6c-41af-a4b6-37f720474570','photo'),(36,71,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2FpicToCon.webp?alt=media&token=9fa6c367-0601-4f4b-913a-017c0878c129','photo'),(37,71,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fnew-york.mp4?alt=media&token=fa29bedd-f644-4d60-8faf-07cf3a12005b','video'),(38,72,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fauto.webp?alt=media&token=e7da84a6-b7af-4676-9ffa-e7d58ef644b1','photo'),(39,72,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fnew-york.mp4?alt=media&token=43c2258e-d79d-4efe-98fc-72d82768b82e','video'),(40,73,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fauto1.webp?alt=media&token=d2a7a040-022a-4662-a916-2c9af47f1d18','photo'),(41,74,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fmaps.webp?alt=media&token=fd2cb198-a133-49b0-ac21-304fad0bc738','photo'),(42,74,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fauto1.webp?alt=media&token=c6158e37-05d6-4d1d-8166-337a9a0c43f7','photo'),(43,74,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2FpicToCon.webp?alt=media&token=dfa9467f-2660-45d9-998d-8970d31f1047','photo'),(44,75,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fmaps.webp?alt=media&token=953ff18b-db95-4ae0-8646-638913f91a58','photo'),(45,75,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fauto1.webp?alt=media&token=c3877cfc-aac7-4994-bf58-d84bff4f77ac','photo'),(46,75,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2FpicToCon.webp?alt=media&token=b823b94c-b271-4458-bce8-a7c6690b9b0c','photo'),(47,75,'https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/foto%2Fnew-york.mp4?alt=media&token=f6fa6d51-a68e-414b-a2a4-4748b2deff62','video');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
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
