const express = require("express");
const { getAllBrand, getAllPayout } = require("../controllers/usersControler");
const router = express.Router();
router.route("/brand").get(getAllBrand);
router.route("/payout").get(getAllPayout);
module.exports = router;
