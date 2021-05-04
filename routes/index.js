const express = require('express');
const router = express.Router();
var db = require('../db');

router.use('/subscribe', require('./subscribe.js'));
router.use('/about', require('./about.js'));
let userCount;



router.get('/', (req, res)=>{
    //res.send("Hello from your local node server")
    db.query(`SELECT count(*) AS exact_count from users`, (error,results) => {
        if (error) {
            //console.log(error.stack)
        } /* else {
            return userCount = results.rows[0]['exact_count']
            //console.log(userCount)
        } */
        res.render('pages/index', {userCount:results.rows[0]['exact_count']});
    });
    
});

module.exports = router;