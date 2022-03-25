const express = require('express');
const middleware = require('./middleware');
require('env2')('.env');

const app = express();

middleware(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;
