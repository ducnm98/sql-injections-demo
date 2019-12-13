var router = require("express").Router();

router.use("/loginFix2", require("./loginFix2"));
router.use("/loginFix", require("./loginFix"));
router.use("/login", require("./login"));

router.get("/add", (req, res) => {
  const db = req.db;
  db.all("SELECT * FROM data", (err, row) => {
    return res.render("comment", { row });
  });
});

router.post("/add", (req, res) => {
  const db = req.db;
  var query = `INSERT INTO data VALUES ('${req.body.name}', '${req.body.description}')`;
  console.log("query: " + query);
  db.run(query, (err, row) => {
    return res.redirect("/add")
  });
});

router.get("/page", (req, res) => {
  const db = req.db;
  db.get(req.query.id, function(err, row) {
    if (err) return res.json(null);
    return res.json(row);
  });
});

module.exports = router;
