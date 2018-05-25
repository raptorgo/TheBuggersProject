const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'thebugger',
    password: 'admin',
    port: 5432,
})

client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
})

var deleteCompanyMachine = (machineId, res) => {
    client.query('DELETE FROM machines WHERE machines_id = $1::integer', [machineId], (err, response) => {
        if(err){
            console.log(err)
            res.json({error: true})
        }else{
            res.json(response.rows);
        }
    })
}
var getCompanyMachines = (companyId, res) => {    
    client.query('SELECT * FROM machines WHERE company_id = $1::integer', [companyId], (err, response) => {
        if(err){
            console.log(err)
            res.json({error: true})
        }else{
            res.json(response.rows);
        }
    })
}

module.exports = {
    getCompanyMachines,
    deleteCompanyMachine
}