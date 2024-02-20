const express = require("express");
const {
  getAllCertification,
} = require("../controllers/certificatesController.js");
const router = express.Router();
router.route("/").get(getAllCertification);
module.exports = router;
