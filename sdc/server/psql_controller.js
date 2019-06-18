const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'elephant',

});

module.exports = { pool };
