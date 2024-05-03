const express = require("express");
const {
  getAllSubCategory,
} = require("../controllers/subcategoriesController.js");
const router = express.Router();
router.route("/").get(getAllSubCategory);
module.exports = router;
