
const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    password: process.env.DB_KEY,
    port: process.env.DB_PORT
})

pool.connect();


/* const { Client } = require('pg');

const client = new Client({
    host: process.env.DATABASE_URL
});

client.connect();
 */

module.exports = pool;
//module.exports = client;