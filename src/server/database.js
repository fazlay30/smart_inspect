const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'feenix-mariadb-web.swin.edu.au',
  user: 's103796085',
  password: '151202',
  database: 's103796085_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;