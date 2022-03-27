const express = require('express');

const router = express.Router();
const {
  signup,
  login,
} = require('../controllers');

router.post('/home', signup);
router.post('/login', login);

module.exports = router;
