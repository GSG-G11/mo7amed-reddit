const checkEmailLogin = require('./login/checkEmailLogin');
const deletePostQuery = require('./post/deletePostQuery');
const getPostsQuery = require('./post/getPostsQuery');
const addUserQuery = require('./signup/addUser');
const checkEmailQuery = require('./signup/checkEmail');
const checkUsernameQuery = require('./signup/checkUsername');
const addPostQuery = require('./post/addPostQuery');
const getSinglePostQuery = require('./post/getSinglePostQuery');

module.exports = {
  addUserQuery,
  checkEmailQuery,
  checkUsernameQuery,
  checkEmailLogin,
  getPostsQuery,
  deletePostQuery,
  addPostQuery,
  getSinglePostQuery,
};
