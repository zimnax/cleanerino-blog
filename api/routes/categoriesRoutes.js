const express = require("express");
const { getAllCategory } = require("../controllers/categoriesController.js");
const router = express.Router();
router.route("/").get(getAllCategory);
module.exports = router;
