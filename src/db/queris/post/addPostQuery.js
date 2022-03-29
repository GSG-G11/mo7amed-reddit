const connection = require('../../config');

const addPostQuery = ({
  title,
  description,
  image,
  userId,
}) => connection.query(
  'INSERT INTO posts (title, description, image, user_id ) VALUES ($1, $2, $3, $4) RETURNING *',
  [title, description, image, userId],
);

module.exports = addPostQuery;
