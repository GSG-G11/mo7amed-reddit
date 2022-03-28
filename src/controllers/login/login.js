const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { checkEmailLogin } = require('../../db/queris');
const customizeError = require('../../error/customizeError');
const { loginValidation } = require('../../validation');

require('env2')('.env');

const { SECRET_KEY } = process.env;

const login = (req, res) => {
  let id;
  const { username, email, password } = req.body;
  loginValidation({ email, password })
    .then(() => checkEmailLogin(email))
    .then((data) => {
      if (!data.rows.length) {
        throw customizeError(400, 'Please! Create Account First!');
      }
      const { password: hashedPassword } = data.rows[0];
      id = data.rows[0].id;
      return compare(password, hashedPassword);
    })
    .then((isMatched) => {
      if (isMatched) {
        sign(
          {
            id,
            username,
            email,
          },
          SECRET_KEY,
          (err, token) => {
            res.cookie('accessToken', token, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 24 * 2 }).json({ msg: ' Log in successfully' });
          },
        );
      } else if (!isMatched) {
        throw customizeError(400, 'incorrect password');
      }
    })
    .catch(err => {
      if (err.message === 'incorrect password') {
        res.status(400).json({ msg: 'incorrect password' });
      } else if (err.message === 'Please! Create Account First!') {
        res.status(400).json({ msg: 'Please! Create Account First!' });
      }
    });
};
module.exports = login;
