const connection = require('../../config');

const addUserQuery = (name, username, email, image, password) => connection.query({
  text: 'INSERT INTO users (username, email, password) values ($1, $2, $3,$4,$5) Returning *',
  values: [name, username, email, image, password],
});
module.exports = addUserQuery;
