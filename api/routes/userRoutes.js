const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllBrand,
  getAllPayout,
} = require("../controllers/usersControler");
const router = express.Router();
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

module.exports = router;
