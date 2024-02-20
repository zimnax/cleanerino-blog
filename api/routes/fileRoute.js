const express = require("express");
const { updateFile } = require("../controllers/fileController.js");
const router = express.Router();
router.route("/:id").post(updateFile);

module.exports = router;
