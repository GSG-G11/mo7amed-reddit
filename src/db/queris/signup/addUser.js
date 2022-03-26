const connection = require('../../config');

const addUserQuery = (username, email, password) => connection.query({
  text: 'INSERT INTO users (username, email, password) values ($1, $2, $3) Returning *',
  values: [username, email, password],
});
module.exports = addUserQuery;
