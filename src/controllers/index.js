const login = require('./login/login');
const getPosts = require('./post/getPosts');
const signup = require('./signup/signup');
const deletePost = require('./post/deletePost');
const addPost = require('./post/addPost');

module.exports = {
  signup,
  login,
  getPosts,
  deletePost,
  addPost,
};
