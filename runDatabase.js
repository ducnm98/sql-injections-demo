
var sqlite3 = require('sqlite3').verbose();


const runDatabase = () => {
  var db = new sqlite3.Database(':memory:');
  db.serialize(function() {
    db.run("CREATE TABLE user (username TEXT, password TEXT, name TEXT)");
    db.run("INSERT INTO user VALUES ('admin', 'admin123', 'App Administrator')");
  });
  return { db }
}

module.exports = { runDatabase }