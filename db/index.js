const Pool = require('pg').Pool

const pool = new Pool({
    //user: process.env.DATABASE_USER,
    host: process.env.DATABASE_URL,
    //database: process.env.DATABASE_NAME,
    p//assword: process.env.DB_KEY,
    //port: process.env.DB_PORT
})



module.exports = pool;