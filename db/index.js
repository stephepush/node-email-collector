const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'email-collector',
    password: '_6jrF4U&6nuYe>&*SWJbT:3s!:)WeiL~k^b^4b+a[yRD!',
    port: 5432,
})



module.exports = pool;