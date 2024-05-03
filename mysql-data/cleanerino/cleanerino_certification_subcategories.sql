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
-- Table structure for table `certification_subcategories`
--

DROP TABLE IF EXISTS `certification_subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certification_subcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `certification_subcategories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `certification_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certification_subcategories`
--

LOCK TABLES `certification_subcategories` WRITE;
/*!40000 ALTER TABLE `certification_subcategories` DISABLE KEYS */;
INSERT INTO `certification_subcategories` VALUES (1,1,'USDA Organic','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FUSDA%20Organic.jpeg?alt=media&token=601d54b2-7758-49c0-b9dc-bc9618aa9150'),(2,1,'QAI Organic','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FACFrOgAFkJJutO7cmxi5Phty6bpVTLI8rppCsH92zq46VtKu426tKF8im4FV753IrfSzYB9oAYtzmB2BPMHQqMASvmSkvRlWqEE3KKM8JlvI-pIA9189Gr9aFSkVNksYqoMscZRXZVoBwhD32Tf9gDvlIf3t8HUUt3gdFXu5gw%3D%3D_page-0001.jpg?alt=media&token=18426a2b-507e-43db-ae6b-4f2f6fae4af1'),(3,2,'Certified vegan from Vegan.org','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FCertified-vegan%20-%20Vegan.org%20(black).png?alt=media&token=5d0241e5-6045-424c-a06a-a4c04c52a27f'),(4,2,'Trusted Vegan - Vegan Trademark','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FTrusted%20vegan%20-%20by%20vegan%20society.webp?alt=media&token=ab63738e-6830-4850-aabe-ee418f5feb5a'),(5,2,'V-Label','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FV-Label%20-%20Vegan.png?alt=media&token=2fcb1208-6d53-4bfc-9d83-2f9224839cf5'),(6,2,'Vegetarian Society Vegan Approved','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FVegetarian%20Society%20Approved.jpeg?alt=media&token=eed83d21-fba0-4435-b4d5-c9d8bcfd0320'),(7,3,'Vegetarian Society Approved','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FVegetarian%20Society%20Approved.jpeg?alt=media&token=eed83d21-fba0-4435-b4d5-c9d8bcfd0320'),(8,3,'V-Label International Vegetarian','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FV-Label-Vegetarian.png?alt=media&token=c129e82b-1029-4983-a982-7284800997db'),(9,5,'PETA Approved','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FPETA%20approved%20.webp?alt=media&token=2e41c2ce-d4df-4662-8659-1a19f68b3bb2'),(10,5,'Leaping Bunny Certified','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FLeaping-bunny.webp?alt=media&token=ac7300ae-e01e-4030-9e5d-0be5539a638d'),(11,5,'Nature Watch Foundation','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FNaturewatch%20foundation%20-%20cruelty%20free.png?alt=media&token=09cad607-895e-4637-8166-cf795c01848c'),(12,6,'Palm oil-free','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FPalm%20oil%20free.webp?alt=media&token=ed87156d-d5f1-4a03-b991-3efe8858a8ac'),(13,6,'Fair trade certified','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FFair%20trade%20certified.png?alt=media&token=bba88cbb-37c9-488a-8b11-a4001cf46a16'),(14,6,'Carbon neutral','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FCertified%20carbon%20neutral.png?alt=media&token=11c07165-7a3c-4df8-b219-9d1c8f051ae8'),(15,6,'Responsible mica','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FResponsible%20mica.png?alt=media&token=7d96c718-f8e2-49ad-a8b0-d56dee41c259'),(16,6,'Rainforest alliance','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FRainforest%20alliance.png?alt=media&token=8a73fff8-5ae9-4a7b-af8f-f9583125c1cd'),(17,6,'RSPO-certified','https://firebasestorage.googleapis.com/v0/b/cleanerio-b080f.appspot.com/o/certification%2FRSPO.jpeg?alt=media&token=99bbd801-85b8-42d6-87d9-1ce772e0e3e3');
/*!40000 ALTER TABLE `certification_subcategories` ENABLE KEYS */;
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
