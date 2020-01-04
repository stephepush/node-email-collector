const express = require('express');
const app = express();

//Will I need to require postgres/pg?

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

//app.use(express.static('./public'));

app.use(morgan('short'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    //res.send("Hello from your local node server")
    res.render('pages/index')
});

app.listen(3000, ()=>{
    console.log("Server is up and listening on port 3000")
})