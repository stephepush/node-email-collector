const express = require('express');
const router = express.Router();


const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'email-collector',
    password: '_6jrF4U&6nuYe>&*SWJbT:3s!:)WeiL~k^b^4b+a[yRD!',
    port: 5432,
})

router.get('/', (req, res)=>{
    res.render('pages/subscribe')
});

router.post('/subscribed', (req, res)=>{
    let parsedFirstName = req.body.firstName;
    let parsedLastName = req.body.lastName;
    let parsedEmail = req.body.email;
    console.log(`First name: ${parsedFirstName} \n Last name: ${parsedLastName} \n Email: ${parsedEmail}`)
})


module.exports = router;