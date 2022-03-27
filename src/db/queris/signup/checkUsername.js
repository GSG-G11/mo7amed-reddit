const customizeError = require('../../../error/customizeError');
const connection = require('../../config');

const checkUsernameQuery = ({ username }) => connection.query('SELECT * FROM users WHERE username=$1', [username])
  .then((data) => {
    if (data.rows.length !== 0) throw new Error('THIS USERNAME IS TAKEN TRY ANOTHER ONE');
  });
module.exports = checkUsernameQuery;
