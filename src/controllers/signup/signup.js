const { sign } = require('jsonwebtoken');
const {
  checkEmailQuery,
  addUserQuery,
  checkUsernameQuery,
} = require('../../db/queris');

const { SECRET_KEY } = process.env;
const signupValidation = require('../../validation');
const customizeError = require('../../error/customizeError');
const { hashPassword } = require('./hashing');
require('env2')('.env');

const signup = (req, res) => {
  const {
    username,
    email,
    image,
    password,
  } = req.body;
  signupValidation(req.body)
    .then(() => checkEmailQuery(email))
    .then(() => checkUsernameQuery(username))
    .then(() => hashPassword(password))
    .then((hashedPassword) => addUserQuery(username, email, image, hashedPassword))
    .then((data) => {
      const { id } = data.rows[0];
      sign({ id, username, email }, SECRET_KEY, (err, token) => {
        if (err) {
          throw customizeError(500, 'ERROR');
        } else {
          res
            .cookie('access_token', token, { httpOnly: true, secure: true })
            .status(201)
            .json({ msg: 'you rigisted successfully' });
        }
      });
    })
    .catch((err) => {
      if (err.message === 'THIS EMAIL IS TAKEN TRY ANOTHER ONE') {
        return res.status(403).json({
          status: 403,
          oldInput: req.body,
          message: 'Email already was used',
          filedInputError: 'email',
        });
      }
      if (err.message === 'THIS USERNAME IS TAKEN TRY ANOTHER ONE') {
        return res.status(403).json({
          status: 403,
          oldInput: req.body,
          message: 'USERNAME already was used',
          filedInputError: 'username',
        });
      }
    });
};
module.exports = signup;
