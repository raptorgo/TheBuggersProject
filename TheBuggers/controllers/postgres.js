const { Pool, Client } = require('pg')
const bcrypt = require('bcrypt');

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

var loginClient = (email_client, password, res) => {
    client.query('SELECT password FROM username WHERE email = $1', [email_client], (err, response) => {
        if (err) {
            console.log(err)
            res.send('Riprova coglione');
        } else if (response.rowCount == 0) {
            res.send('Riprova coglione');
        } else {
            //controllare hash password
            console.log('PASSWORD: ', response.rows);
            
            if (bcrypt.compareSync(password, response.rows[0].password)) {
                res.status(200).json({result: true})
            } else {
                res.send("Email e/o password errati. Riprova");
            }
        }
    })
}

module.exports = {
    getCompanyMachines,
    deleteCompanyMachine,
    loginClient
}