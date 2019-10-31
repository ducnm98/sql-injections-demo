var router = require('express').Router();

router.use("/loginFix2", require("./loginFix2"))
router.use("/loginFix", require("./loginFix"))
router.use("/login", require("./login"))

module.exports = router;
