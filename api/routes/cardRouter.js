const express = require("express");
const {
  createCard,
  getCardById,
  deleteCard,
  updateCard,
} = require("../controllers/cardController");
const router = express.Router();
router.route("/").post(createCard);
router.route("/:id").get(getCardById).delete(deleteCard).put(updateCard);

module.exports = router;
