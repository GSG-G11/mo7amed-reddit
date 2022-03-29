const connection = require('../../config');

const deletePostQuery = (postId) => connection.query(
  'DELETE FROM posts WHERE id = $1 RETURNING *',
  [postId],
);
module.exports = deletePostQuery;
