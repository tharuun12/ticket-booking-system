const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ticket',
  password: 'Tharuunsaras@2003',
  port: 5432,
});

module.exports = pool;