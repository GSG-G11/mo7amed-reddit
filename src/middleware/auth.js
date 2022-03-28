const { verify } = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const { accessToken } = req.cookies;

  if (accessToken) {
    verify(accessToken, process.env.SECRET, (err, user) => {
      if (err) {
        res.clearCookie('accessToken');
        res.redirect('/login');
      }

      req.user = user;
      next();
    });
  } else {
    res.redirect('/login');
  }
};

const isNotAuth = (req, res, next) => {
  const { accessToken } = req.cookies;
  console.log(accessToken);

  if (accessToken) {
    res.redirect('/');
  }

  next();
};

module.exports = {
  isAuth,
  isNotAuth,
};
