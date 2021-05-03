const express = require('express');
const client = require('../db');
const router = express.Router();
var db = require('../db');

/* 
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'email-collector',
    password: 'password!',
    port: 5432,
}) */

router.get('/', (req, res)=>{
    res.render('pages/subscribe')
});

router.post('/subscribed', (req, res)=>{
    let parsedFirstName = req.body.firstName;
    let parsedLastName = req.body.lastName;
    let parsedEmail = req.body.email;
    const now = new Date()
    db.query('INSERT INTO users (first_name, last_name, email, timestamp) VALUES ($1, $2, $3, $4)', [parsedFirstName, parsedLastName, parsedEmail, now], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).send(`Thanks for submitting your info, ${parsedFirstName}!`)
        console.log(`First name: ${parsedFirstName} \n Last name: ${parsedLastName} \n Email: ${parsedEmail}`)
        
    }
    )
    //client.end();
    res.send(`Thanks for submitting your info, ${parsedFirstName}!`);
    res.end();
})


module.exports = router;