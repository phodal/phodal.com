var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dev.db', 'sqlite3.OPEN_READONLY');

db.serialize(function () {
  db.each("SELECT * FROM `blog_blogpost`", function (err, row) {
    console.log(row);
  });
});

db.close();
