const express = require('express');

const router = express.Router();
const signup = require('../controllers');

router.post('/home', signup);
module.exports = router;
