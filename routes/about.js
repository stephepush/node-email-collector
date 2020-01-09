const express = require('express');
const router = express.Router();
var db = require('../db');

let userCount;

db.query(`SELECT count(*) AS exact_count from users`, (error, results) => {
    if (error) {
        console.log(error.stack)
    } else {
        return userCount = results.rows[0]['exact_count']
    }
})

router.get('/', (req, res)=>{
    
    res.render('pages/about', {userCount:userCount})
});

module.exports = router;