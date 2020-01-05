const express = require('express');
const router = express.Router();

router.use('/subscribe', require('./subscribe.js'));
router.use('/about', require('./about.js'));

router.get('/', (req, res)=>{
    //res.send("Hello from your local node server")
    res.render('pages/index')
});

module.exports = router;