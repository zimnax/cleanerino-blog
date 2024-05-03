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
-- Table structure for table `product_types`
--

DROP TABLE IF EXISTS `product_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_types_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_types`
--

LOCK TABLES `product_types` WRITE;
/*!40000 ALTER TABLE `product_types` DISABLE KEYS */;
INSERT INTO `product_types` VALUES (1,1,'Moisturizer'),(2,1,'Cleanser'),(3,1,'Face wash'),(4,1,'Facial toner'),(5,1,'Mask'),(6,1,'Eye cream'),(7,1,'Face cream'),(8,1,'Sunscreen'),(9,1,'Lip balm'),(10,1,'Lip scrub'),(11,1,'Serum'),(12,1,'Exfoliator'),(13,1,'Salve'),(14,1,'Balm'),(15,1,'Facial scrub'),(16,1,'Face oil'),(17,1,'Face Mist'),(18,1,'Hydrosol'),(19,2,'Shampoo'),(20,2,'Soap'),(21,2,'Conditioner'),(22,2,'Flea & tick shampoo'),(23,2,'Paw balm'),(24,2,'Paw soother'),(25,3,'Candle'),(26,3,'Dish soap'),(27,3,'Dishwasher detergent'),(28,3,'Dish sponge'),(29,3,'Surface cleaner'),(30,3,'All-purpose cleaner'),(31,3,'Laundry detergent'),(32,3,'Dryer balls'),(33,3,'Paper towels'),(34,3,'Refillable bottle'),(35,3,'Grease cleaner'),(36,3,'Toilet paper'),(37,3,'Glass cleaner'),(38,3,'Bathroom cleaner'),(39,3,'Essential oil'),(40,4,'Perfume'),(41,4,'Rollerball'),(42,4,'Home spray'),(43,4,'Footwear spray'),(44,5,'Body wash'),(45,5,'Baby powder'),(46,5,'Baby shampoo'),(47,5,'Baby lotion'),(48,5,'Eczema cream'),(49,5,'Rash cream'),(50,5,'Baby oil'),(51,5,'Baby balm'),(52,5,'Baby sunscreen'),(53,5,'After sun lotion'),(54,5,'Moisturizer'),(55,5,'Mist'),(56,5,'Hydrosol'),(57,6,'Shampoo'),(58,6,'Conditioner'),(59,6,'Oil'),(60,6,'Mask'),(61,6,'Serum'),(62,6,'Mousse'),(63,6,'Gel'),(64,6,'Pomade'),(65,6,'Wax'),(66,6,'Beard Oil'),(67,6,'Hair Color'),(68,6,'Styling cream'),(69,7,'Soap'),(70,7,'Body wash'),(71,7,'Scrub'),(72,7,'Soak'),(73,7,'Exfoliant'),(74,7,'Hand soap'),(75,7,'Body lotion'),(76,7,'Body butter'),(77,7,'Body cream'),(78,7,'Body oil'),(79,7,'Hand cream'),(80,7,'Hand lotion'),(81,7,'Foot cream'),(82,7,'Sunscreen'),(83,7,'Intimate care'),(84,7,'Deodorant'),(85,7,'Balm'),(86,7,'Shaving cream'),(87,7,'Moisturizer'),(88,7,'Deodorant'),(89,7,'Bath salt'),(90,7,'Shower steamer'),(91,7,'Shower gel'),(92,7,'Bath bomb'),(93,7,'Massage Oil'),(94,7,'Cuticle Balm'),(95,7,'After sun lotion'),(96,7,'Eczema cream'),(97,7,'Mist'),(98,8,'Primer'),(99,8,'Eye primer'),(100,8,'Foundation'),(101,8,'Powder'),(102,8,'Blush'),(103,8,'Lip balm'),(104,8,'Lipstick'),(105,8,'Lip liner'),(106,8,'Lip gloss'),(107,8,'Eye liner'),(108,8,'Eye shadow'),(109,8,'Eye pencil'),(110,8,'Mascara'),(111,8,'Eyebrow pencil'),(112,8,'Multi-purpose balm');
/*!40000 ALTER TABLE `product_types` ENABLE KEYS */;
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
