require('dotenv').config(); // Load environment variables from .env file
const fs = require('fs');
const path = require('path');

const { Pool } = require('pg');

const pool = new Pool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.DATABASE_CA_CERT,
  },
});

module.exports = pool;
