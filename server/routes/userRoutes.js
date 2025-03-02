// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  addUserAddress,
  addToWishlist,
  removeFromWishlist,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(registerUser)
  .get(protect, admin, getUsers);

router.post('/login', authUser);

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/address')
  .post(protect, addUserAddress);

router.route('/wishlist')
  .post(protect, addToWishlist);

router.route('/wishlist/:id')
  .delete(protect, removeFromWishlist);

router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

module.exports = router;