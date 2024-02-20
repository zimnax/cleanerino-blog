const express = require("express");
const { getAllPackaging } = require("../controllers/packagingController.js");
const router = express.Router();
router.route("/").get(getAllPackaging);
module.exports = router;
