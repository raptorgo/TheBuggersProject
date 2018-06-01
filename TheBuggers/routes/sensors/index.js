var express = require('express');
var router = express.Router();

router.get('/company/:id', function (req, res, next) {
    res.json({ "page": "/api/v1/sensors/company/:id" })
});
router.get('/machine/:id', function (req, res, next) {
    let id = parseInt(req.params.id)
    switch (id) {
        case 1:
            res.json([
                {
                    id: 1,
                    name: "Temperatura"
                }, {
                    id: 2,
                    name: "Umidità"
                }
            ])
            break;
        case 2:
            res.json([
                {
                    id: 3,
                    name: "Temperatura"
                }, {
                    id: 4,
                    name: "Umidità"
                }
            ])
            break;
        case 3:
            res.json([
                {
                    id: 6,
                    name: "Temperatura"
                }, {
                    id: 7,
                    name: "Umidità"
                }, {
                    id: 8,
                    name: "Ventilazione"
                }, {
                    id: 9,
                    name: "Amperometro"
                }
            ])
            break;
        case 4:
            res.json([
                {
                    id: 10,
                    name: "Temperatura"
                }, {
                    id: 11,
                    name: "Umidità"
                }, {
                    id: 12,
                    name: "Amperometro"
                }
            ])
            break;
        case 5:
            res.json([
                {
                    id: 13,
                    name: "Temperatura"
                }, {
                    id: 14,
                    name: "Umidità"
                }, {
                    id: 15,
                    name: "Ventilazione"
                }, {
                    id: 16,
                    name: "Amperometro"
                }
            ])
            break;
        case 6:
            res.json([
                {
                    id: 17,
                    name: "Corrente assorbita"
                }, {
                    id: 18,
                    name: "Numero giri"
                }, {
                    id: 19,
                    name: "Ore lavoro"
                }
            ])
            break;
        case 7:
            res.json([
                {
                    id: 20,
                    name: "Corrente assorbita"
                }, {
                    id: 21,
                    name: "Numero giri"
                }, {
                    id: 22,
                    name: "Ore lavoro"
                }
            ])
            break;
        default:
            res.json({ error: true })
            break;
    }
})
router.delete('/company/:id', function (req, res, next) {
    res.json({ "page": "/api/v1/sensors/company/:id" })
});
router.put('/company/:id', function (req, res, next) {
    res.json({ "page": "/api/v1/sensors/company/:id" })
});
router.post('/company/:id', function (req, res, next) {
    res.json({ "page": "/api/v1/sensors/company/:id" })
});
// Get sensor from ID
router.get('/:id/start/:start/end/:end', function (req, res, next) {
    json =[ ['Minuto', 'Temperatura']]
    let clock = 10.10;
    for(var i=0; i < 20; i++){
        clock = clock + 0.10;
        json.push([clock, Math.random() * (50 - 40) + 40])
    }
    res.json(json)
    /*res.json([
                ['Minuto', 'Temperatura'],
                ['10.11', 30],
                ['10.12', 20],
                ['10.13', 30],
                ['10.14', 20],
                ['10.15', 30],
                ['10.16', 20],
                ['10.17', 30],
                ['10.18', 20],
                ['10.19', 30],
                ['10.20', 20],
                ['10.21', 30],
                ['10.22', 20],
                ['10.23', 30],
                ['10.24', 20],
                ['10.25', 30],
                ['10.26', 20],
            ])
            break;
        }*/
});

module.exports = router;
