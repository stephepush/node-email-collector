const express = require('express');
const app = express();

//Will I need to require postgres/pg?

const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}))

//app.use(express.static('./public'));

app.use(morgan('short'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    //res.send("Hello from your local node server")
    res.render('pages/index')
});

app.get('/subscribe', (req, res)=>{
    //res.send("HAHA! Soon to be a subscribe view!")
    res.render('pages/subscribe')
});

app.get('/about', (req, res)=>{
    //res.send("haha! Soon to be the about view!")
    res.render('pages/about')
})

app.listen(PORT, ()=>{
    console.log(`Server is up and listening on port ${PORT}...`)
});