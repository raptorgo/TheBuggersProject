const Influx = require('influx');
const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'data',
  schema: [
    {
      measurement: 'mymeas',
      fields: {
        myField: Influx.FieldType.INTEGER
      },
      tags: [
        'myTag'
      ]
    }
  ]
})

var measurement = () => {
  influx.getMeasurements().then(names =>
    console.log('My measurement names are: ' + names.join(', '))
  );
}

var series = () => {
  influx.getSeries().then(sad => {
    console.log('My series names in my_measurement are: ' + sad.join(', '))
  })
}

var select = () => {
  influx.query('select * from mymeas').then(results => {
    console.log(JSON.stringify(results))
  })
}
module.exports = {
  measurement,
  series,
  select
}