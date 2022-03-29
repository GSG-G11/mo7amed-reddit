const connection = require('../../config');

const addUserQuery = (username, email, image, password) => connection.query({
  text: 'INSERT INTO users (username, email,image, password) values ($1, $2, $3, $4) Returning *',
  values: [username, email, image, password],
});
module.exports = addUserQuery;
