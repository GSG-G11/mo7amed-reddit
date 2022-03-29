const { join } = require('path');

const userController = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'posts', 'index.html'));
};

module.exports = userController;
