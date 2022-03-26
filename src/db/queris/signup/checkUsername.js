const customizeError = require('../../../error/customizeError');
const connection = require('../../config');

const checkUsernameQuery = (username) => {
  connection
    .query({
      text: 'SELECT * FROM users WHERE username= $1',
      values: [username],
    })
    .then(({ rowCount }) => {
      if (rowCount) {
        throw customizeError(403, 'THIS USERNAME IS TAKEN TRY ANOTHER ONE');
      }
    });
};
module.exports = checkUsernameQuery;
