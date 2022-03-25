const connection = require('../../config');

const checkUsernameQuery = (username) => {
  connection
    .query({
      text: 'SELECT * FROM users WHERE username= $1 Returning *',
      values: [username],
    })
    .then(({ rowCount }) => {
      if (rowCount) {
        throw new Error('THIS USERNAME IS TAKEN TRY ANOTHER ONE');
      }
    });
};
module.exports = checkUsernameQuery;
