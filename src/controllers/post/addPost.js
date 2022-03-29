const { postValidation } = require('../../validation');
const { addPostQuery } = require('../../db/queris');

const addPost = (req, res) => {
  const userId = req.user.id;
  const {
    title, description, image,
  } = req.body;
  postValidation(req.body, { abortEarly: false })
    .then(() => addPostQuery({
      title, description, image, userId,
    }))
    .then((data) => {
      res.json({
        data: data.rows[0],
        msg: 'post created successfully !',
        status: 201,
      });
    })
    .catch((err) => {
      if (err.details) {
        res.status(422).json({
          msg: err.details[0].message,
          status: 422,
        });
      } else {
        res.status(500).json(
          {
            msg: 'Internal Server Error',
            status: 500,
          },
        );
      }
    });
};
module.exports = addPost;
