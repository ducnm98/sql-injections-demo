
var sqlite3 = require('sqlite3').verbose();
var bcrypt = require('bcrypt');


const runDatabase = () => {
  var db = new sqlite3.Database(':memory:');
  bcrypt.hash("admin123", 10, function(err, hash) {
    db.serialize(function() {
      db.run("CREATE TABLE user (username TEXT, password TEXT, name TEXT)");
      db.run("INSERT INTO user VALUES ('admin', 'admin123', 'App Administrator')");
      db.run(`INSERT INTO user VALUES ('admin1', '${hash}', 'App Administrator')`);
    });
  });
  return { db }
}

module.exports = { runDatabase }