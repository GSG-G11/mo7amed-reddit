require('env2')('.env');
const { verify } = require('jsonwebtoken');

const checkAuth = (req, res) => {
  const { accessToken } = req.cookies;
  if (accessToken) {
    verify(accessToken, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
        res.clearCookie('accessToken');
        res.status(400).json({ msg: 'You are not logged in' });
      } else {
        res.status(200).json({ msg: 'You are logged in', data: payload });
      }
    });
  } else {
    res.status(400).json({ msg: 'You are not logged in' });
  }
};
module.exports = checkAuth;
