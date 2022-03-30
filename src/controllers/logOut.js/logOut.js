const logOut = (req, res) => {
  res.clearCookie('accessToken').json({msg: 'You are logged out'});
};

module.exports = logOut;
