var router = require("express").Router();
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('loginFix2', { title: 'Express' });
});

/* GET users listing. */
router.post("/", function(req, res, next) {
  const db = req.db;
  var username = req.body.username; // a valid username is admin
  var password = req.body.password; // a valid password is admin123

  
  var stmt = "SELECT * FROM user where username = ?";
  
  // stmt.bind(":password", password)
  
  console.log("username: " + username);
  console.log("password: " + password);
  console.log("query: ", stmt)
  

  db.get(stmt, [username], function(err, row) {
    const isCorrect = bcrypt.compareSync(password, row.password)
    if (isCorrect) {
      res.send(
        "Hello <b>" +
          row.name +
          '</b><br /><a href="/loginFix">Go back to login</a>'
      );
    } else {
      if (err) {
        console.log("ERROR", err);
        res.redirect("/loginFix#error");
      } else {
        res.redirect("/loginFix#unauthorized");
      }
    }
  });
});

module.exports = router;
