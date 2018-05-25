var express = require('express');
var router = express.Router();
/**
 * Routing for companies: GET PUT POST DELETE
 */
// Get all companies
router.get('/', function(req, res, next) {
    res.json({"page": "/api/v1/companies"})
});
// Get company from ID
router.get('/:id', function(req, res, next) {
    res.json({"page": "/api/v1/companies/:id"})
});
// Delete company from ID
router.delete('/:id', function(req, res, next) {
    res.json({"page": "/api/v1/companies/:id"})
});
// Update company from ID
router.put('/:id', function(req, res, next) {
    res.json({"page": "/api/v1/companies/:id"})
});
// Create new company
router.post('/', function(req, res, next) {
    res.json({"page": "/api/v1/companies/:id"})
});

module.exports = router;
