const checkEmailLogin = require('./login/checkEmailLogin');
const getPostsQuery = require('./post/getPostsQuery');
const addUserQuery = require('./signup/addUser');
const checkEmailQuery = require('./signup/checkEmail');
const checkUsernameQuery = require('./signup/checkUsername');

module.exports = {
  addUserQuery,
  checkEmailQuery,
  checkUsernameQuery,
  checkEmailLogin,
  getPostsQuery,
};
