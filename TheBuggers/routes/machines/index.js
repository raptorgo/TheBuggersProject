var express = require('express');
var postgres = require("../../controllers/postgres")
var router = express.Router();
/**
 * Routing for machines: GET PUT POST DELETE
 */
// Get all machines
router.get('/', function(req, res, next) {
    res.json({"page": "/api/v1/machines"})
});
// Get machine from ID
router.get('/:id', function(req, res) {
    postgres.getCompanyMachines(req.params.id, res);
    // res.json({"page": "/api/v1/companies/:id"})
});
// Delete machine from ID
router.delete('/:id', function(req, res) {
    postgres.deleteCompanyMachine(req.params.id, res)
});
// Update machine from ID
router.put('/:id', function(req, res, next) {
    res.json({"page": "/api/v1/machines/:id"})
});
// Create new machine
router.post('/', function(req, res, next) {
    res.json({"page": "/api/v1/machines/:id"})
});

module.exports = router;
