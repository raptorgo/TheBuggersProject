var express = require('express');
var router = express.Router();

router.get('/company/:id', function(req, res, next) {
    res.json({"page": "/api/v1/sensors/company/:id"})
});
router.delete('/company/:id', function(req, res, next) {
    res.json({"page": "/api/v1/sensors/company/:id"})
});
router.put('/company/:id', function(req, res, next) {
    res.json({"page": "/api/v1/sensors/company/:id"})
});
router.post('/company/:id', function(req, res, next) {
    res.json({"page": "/api/v1/sensors/company/:id"})
});
// Get sensor from ID
router.get('/:id', function(req, res, next) {
    res.json({"page": "/api/v1/sensors/:id"})
});

module.exports = router;
