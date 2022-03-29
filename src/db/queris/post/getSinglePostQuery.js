const connection = require('../../config');

const getSinglePostQuery = (id) => connection.query(
  'SELECT * FROM posts WHERE id = $1',
  [id],
);
module.exports = getSinglePostQuery;
