const db = require('./database');

db.query('SELECT * FROM Users', function (err, results) {
  if (err) throw err;
  console.log(results);
});
