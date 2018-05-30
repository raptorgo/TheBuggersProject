var express = require('express');
var postgres = require("../../controllers/postgres")
var router = express.Router();

router.post('/login', function(req, res, next) {
    postgres.loginClient(req.body.email, req.body.password, res);
    // res.json({"page": "/api/v1/auth/login"})
});
router.get('/logout', function(req, res, next) {
    res.json({"page": "/api/v1/auth/logout"})
});

module.exports = router;
