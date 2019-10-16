var router = require("express").Router();

router.get('/', function(req, res, next) {
  res.render('loginFix', { title: 'Express' });
});

/* GET users listing. */
router.post("/", function(req, res, next) {
  const db = req.db;
  var username = req.body.username; // a valid username is admin
  var password = req.body.password; // a valid password is admin123

  
  var stmt = "SELECT name FROM user where username = ? and password = ?";
  
  var query = {
    $username: username,
    $password: password
  }
  // stmt.bind(":password", password)
  
  console.log("username: " + username);
  console.log("password: " + password);
  console.log("query: ", stmt)
  

  db.get(stmt, [username, password], function(err, row) {
    console.log(row)
    if (err) {
      console.log("ERROR", err);
      res.redirect("/loginFix#error");
    } else if (!row) {
      res.redirect("/loginFix#unauthorized");
    } else {
      res.send(
        "Hello <b>" +
          row.name +
          '</b><br /><a href="/loginFix">Go back to login</a>'
      );
    }
  });
});

module.exports = router;
