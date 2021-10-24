const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  //MySQL username,
  user: 'root',
  //MySQL password
  password: '',
  database: 'tracker'
});

module.exports = db;