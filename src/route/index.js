const express = require('express');

const router = express.Router();
const { isNotAuth } = require('../middleware/auth');

const {
  signup,
  login,
} = require('../controllers');

router.post('/signup', isNotAuth, signup);
router.post('/login', isNotAuth, login);

module.exports = router;
