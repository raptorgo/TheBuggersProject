var express = require('express');
var postgres = require("../../controllers/postgres")
var router = express.Router();
/**
 * Routing for sectors: GET PUT POST DELETE
 */
// Get all machines
router.get('/company/:id', function (req, res, next) {
    res.json([{
        "id": 1,
        "name": "Forno Braford"
    }, {
        "id": 2,
        "name": "Impianto Angus"
    }])
});
// Get sector from ID
router.get('/:id', function (req, res) {
    postgres.getCompanySectors(req.params.id, res);
});
// Delete sector from ID
router.delete('/:id', function (req, res) {
    postgres.deleteCompanyMachine(req.params.id, res)
});
// Update sector from ID
router.put('/:id', function (req, res, next) {
    res.json({ "page": "/api/v1/sectors/:id" })
});
// Create new sector
router.post('/', function (req, res, next) {
    res.json({ "page": "/api/v1/sectors/:id" })
});

module.exports = router;
