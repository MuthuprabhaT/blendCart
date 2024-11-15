const express = require("express");
const router = express.Router();
const {
  getUsers,
  registerUser,
  logoutUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getUserByID,
  updateUser,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser);

module.exports = router;
