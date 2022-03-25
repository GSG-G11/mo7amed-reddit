const connection = require('../../config');

const checkEmailsQuery = (email) => {
  connection
    .query({
      text: 'SELECT * FROM users WHERE email= $1 Returning *',
      values: [email],
    })
    .then(({ rowCount }) => {
      if (rowCount !== 0) {
        throw new Error('THIS EMAIL IS TAKEN TRY ANOTHER ONE');
      }
    });
};

module.exports = checkEmailsQuery;
