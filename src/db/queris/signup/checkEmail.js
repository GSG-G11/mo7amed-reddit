const customizeError = require('../../../error/customizeError');
const connection = require('../../config');

const checkEmailQuery = (email) => {
  connection
    .query({
      text: 'SELECT * FROM users WHERE email= $1',
      values: [email],
    })
    .then(({ rowCount }) => {
      if (rowCount !== 0) {
        throw customizeError(403, 'THIS EMAIL IS TAKEN TRY ANOTHER ONE');
      }
    });
};

module.exports = checkEmailQuery;
