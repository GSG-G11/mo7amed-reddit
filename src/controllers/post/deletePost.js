const { deletePostQuery } = require('../../db/queris');

const deletePost = (req, res) => {
  const { id } = req.params;
  deletePostQuery(id)
    .then((data) => {
      if (data.rows[0]) {
        res.json({
          data: data.rows[0],
          msg: 'post deleted successfully !',
          status: 200,
        });
      } else {
        res.status(404).json({
          msg: 'post not found !',
          status: 404,
        });
      }
    })
    .catch(() => {
      res.status(500).json(
        {
          msg: 'Internal Server Error',
          status: 500,
        },
      );
    });
};
module.exports = deletePost;
