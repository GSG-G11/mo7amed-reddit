const express = require('express');

const router = express.Router();
const {
  signup,
  login,
  getPosts,
  deletePost,
  addPost,
  userController,
} = require('../controllers');
const { isAuth, isNotAuth } = require('../middleware/auth');

router.post('/signup', isNotAuth, signup);
router.post('/login', isNotAuth, login);
router.get('/posts', getPosts);
router.delete('/posts/:id', isAuth, deletePost);
router.post('/posts', isAuth, addPost);
router.get('/user', isAuth, userController);

module.exports = router;
