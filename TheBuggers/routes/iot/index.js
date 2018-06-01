var express = require('express');
var router = express.Router();
var server = require("../../bin/www")
var io = require('../../controllers/socket')
/**
 * Routing for companies: GET PUT POST DELETE
 */
// New sensor data
router.post('/', function(req, res, next) {
    /*setInterval(() => {
        var temperature1 = [
            {   
                timestamp : new Date(),
                type: "temperature",
                machine_id: 1,
                value: Math.random() * (600 - 400) + 400
            }        
        ]
        var temperature2 = [
            {   
                timestamp : new Date(),
                type: "temperature",
                machine_id: 2,
                value: Math.random() * (600 - 400) + 400
            }        
        ]

        var consumption1 = [
            {   
                timestamp : new Date(),
                type: "temperature",
                machine_id: 1,
                value: Math.random() * (600 - 400) + 400
            }        
        ]
        var consumption2 = [
            {   
                timestamp : new Date(),
                type: "temperature",
                machine_id: 2,
                value: Math.random() * (600 - 400) + 400
            }        
        ]
        var consumption = [
            {
                timestamp: new Date(),
                machine_id: 1,
                type: "consumption",
                value: Math.random() * 100
            }
        ]
        
        io.emit(temperature1)
    }, 4000)
    res.status(200).json({result: "iottt"})*/
    console.log("ciao");
    var temperature1 = [
        {   
            timestamp : new Date(),
            type: "temperature",
            machine_id: 1,
            value: Math.random() * (600 - 400) + 400
        }        
    ]
    io.emit(temperature1)
    res.status(200).json({ok: true})
});

module.exports = router;
