const checkEmailLogin = require('./login/checkEmailLogin');

const {
  addUserQuery,
  checkEmailQuery,
  checkUsernameQuery,
} = require('./signup');

module.exports = {
  addUserQuery,
  checkEmailQuery,
  checkUsernameQuery,
  checkEmailLogin,
};
