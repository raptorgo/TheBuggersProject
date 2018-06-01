var express = require('express');
var postgres = require("../../controllers/postgres")
var router = express.Router();
/**
 * Routing for sectors: GET PUT POST DELETE
 */
// Get all sections
router.get('/company/:id', function (req, res, next) {
    res.json([{
        "id": 1,
        "name": "Forno Braford"
    }, {
        "id": 2,
        "name": "Impianto Angus"
    }])
});
// Get section from sector ID
router.get('/:id', function (req, res) {
    let id = parseInt(req.params.id)
    switch (id) {
        case 1:
            res.json([
                {
                    id: 1,
                    name: "Verniciatora prima mano"
                },{
                    id:2,
                    name: "Verniciatora seconda mano"
                }
            ])
            break;
        case 2:
            res.json([
                {
                    id: 3,
                    name: "Forno riscaldamento" 
                }, {
                    id:4,
                    name: "Forno cottura"
                }, {
                    id: 5,
                    name: "Forno raffreddamento"
                }
            ])
            break;
        case 3:
            res.json([
                {
                    id: 6,
                    name: "Motore 1"
                }, {
                    id: 7,
                    name: "Motore 2"
                }
            ])
            break;
        default:
            res.json({ error: true })
            break;
    }
});
// Delete section from ID
router.delete('/:id', function (req, res) {
});
// Update section from ID
router.put('/:id', function (req, res, next) {
    res.json({ "page": "/api/v1/sectors/:id" })
});
// Create new section
router.post('/', function (req, res, next) {
    res.json({ "page": "/api/v1/sectors/:id" })
});

module.exports = router;
