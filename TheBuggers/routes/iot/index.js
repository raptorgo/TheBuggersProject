var express = require('express');
var router = express.Router();
var server = require("../../bin/www")
var io = require('../../controllers/socket')
/**
 * Routing for companies: GET PUT POST DELETE
 */
// New sensor data
router.get('/', function(req, res, next) {
    var json = [
        {
            timestamp : new Date(),
            type: "temperature",
            value: 25
        }        
    ]
    io.emit(json);
    res.status(200).json({result: "iottt"})
});

module.exports = router;
