const express = require("express");
const {
  getAllProduct,
  createProduct,
} = require("../controllers/productControler");
const router = express.Router();
router.route("/").get(getAllProduct).post(createProduct);

module.exports = router;
