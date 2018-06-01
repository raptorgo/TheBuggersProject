var express = require('express')
var influx = require("../controllers/influx")
var postgres = require("../controllers/postgres")
var auth = require("./auth/index")
var companies = require("./companies")
var sensors = require("./sensors")
var iot = require("./iot")
var machines = require("./machines")
var sectors = require("./sectors")
var sections = require("./sections")
var router = express.Router()

router.use('/auth', auth)
router.use('/companies', companies)
router.use('/sensors', sensors)
router.use('/iot', iot)
router.use('/machines', machines)
router.use('/sectors', sectors)
router.use('/sections', sections)

router.get('/', function(req, res, next) {
  influx.measurement()
  influx.select()
  influx.series()
  res.json({api: "Welcome to API EndPoint!"})
})

module.exports = router;