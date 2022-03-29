const customizeError = require('../../error/customizeError');
const { getPostsQuery } = require('../../db/queris');

const getPosts = (req, res) => {
  getPostsQuery()
    .then((data) => {
      if (data.rows.length > 0) {
        res.status(200).json(data.rows);
      } else {
        throw customizeError(404, 'No posts found');
      }
    })
    .catch((err) => {
      if (err.status === 404) {
        res.status(404).json({
          status: 404,
          error: err.message,
        });
      }

      res.status(500).json({
        msg: 'Internal Server Error',
        status: 500,
      });
    });
};
module.exports = getPosts;
