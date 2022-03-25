require('env2')('.env');
const { Pool } = require('pg');

const { NODE_ENV } = process.env;
let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    connectionString = process.env.DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  case 'test':
    connectionString = process.env.DB_URL_TEST;
    break;
  default:
    connectionString = process.env.DB_URL_DEV;
    break;
}

if (!connectionString) {
  throw new Error('NO DATABASE URL');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
