const login = require('./login/login');
const getPosts = require('./post/getPosts');
const signup = require('./signup/signup');
const deletePost = require('./post/deletePost');
const addPost = require('./post/addPost');
const userController = require('./post/userController');
const logOut = require('./logOut.js/logOut');

module.exports = {
  signup,
  login,
  getPosts,
  deletePost,
  addPost,
  userController,
  logOut,
};
