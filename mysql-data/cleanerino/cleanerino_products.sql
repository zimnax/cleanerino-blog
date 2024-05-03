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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `short_description` text,
  `long_description` text,
  `quantity` int DEFAULT NULL,
  `ingredients` text,
  `default_size` int DEFAULT NULL,
  `product_category_id` int DEFAULT NULL,
  `product_type_id` int DEFAULT NULL,
  `glass_id` int DEFAULT NULL,
  `metal_id` int DEFAULT NULL,
  `paper_cardboard_id` int DEFAULT NULL,
  `recyclable_plastic_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_category_id` (`product_category_id`),
  KEY `product_type_id` (`product_type_id`),
  KEY `fk_glass_id` (`glass_id`),
  KEY `fk_metal_id` (`metal_id`),
  KEY `fk_paper_cardboard_id` (`paper_cardboard_id`),
  KEY `fk_recyclable_plastic_id` (`recyclable_plastic_id`),
  CONSTRAINT `fk_glass_id` FOREIGN KEY (`glass_id`) REFERENCES `packaging_subcategories` (`id`),
  CONSTRAINT `fk_metal_id` FOREIGN KEY (`metal_id`) REFERENCES `packaging_subcategories` (`id`),
  CONSTRAINT `fk_paper_cardboard_id` FOREIGN KEY (`paper_cardboard_id`) REFERENCES `packaging_subcategories` (`id`),
  CONSTRAINT `fk_recyclable_plastic_id` FOREIGN KEY (`recyclable_plastic_id`) REFERENCES `packaging_subcategories` (`id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`product_category_id`) REFERENCES `product_categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`product_type_id`) REFERENCES `product_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (71,'Skincare','SkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincare','SkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincareSkincare',2333,'dafad, asdfasdf',NULL,3,27,3,11,14,NULL),(72,'Product','Product','Product',1,'12',NULL,1,2,1,10,NULL,NULL),(73,'wq','wq','wq',1,'fsg',NULL,4,41,4,NULL,NULL,NULL),(74,'qwerq','qwrwe','qwerqwe',123,'dfsadf',NULL,2,20,2,10,NULL,NULL),(75,'Product','Product','Product',12,'Слова, перезаписуються, після, коми, так, khfshg sdfjghsdl, jfhgskjdfhg',NULL,3,25,3,9,15,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-20 21:48:37
