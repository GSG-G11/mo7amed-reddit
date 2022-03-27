const customizeError = require('../../../error/customizeError');
const connection = require('../../config');

const checkEmailQuery = (email) => connection.query({
  text: 'SELECT * FROM users WHERE email= $1',
  values: [email],
})
  .then((data) => {
    if (data.rows.length !== 0) throw customizeError(400, 'THIS EMAIL IS TAKEN TRY ANOTHER ONE');
  });

module.exports = checkEmailQuery;
