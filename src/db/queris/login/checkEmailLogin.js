const customizeError = require('../../../error/customizeError');
const connection = require('../../config');

const checkEmailLogin = (email) => connection.query({
  text: 'SELECT * FROM users WHERE email= $1',
  values: [email],
});
module.exports = checkEmailLogin;
