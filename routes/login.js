var router = require("express").Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET users listing. */
router.post("/", function(req, res, next) {
  const db = req.db;
  var username = req.body.username; // a valid username is admin
  var password = req.body.password; // a valid password is admin123
  var query = "SELECT name FROM user where username = '" + username + "' and password = '" + password +"'";

  console.log("username: " + username);
  console.log("password: " + password);
  console.log("query: " + query);

  db.get(query, function(err, row) {
    if (err) {
      console.log("ERROR", err);
      res.redirect("/login#error");
    } else if (!row) {
      res.redirect("/login#unauthorized");
    } else {
      res.send(
        "Hello <b>" +
          row.name +
          '</b><br /><a href="/login">Go back to login</a>'
      );
    }
  });
});

module.exports = router;
