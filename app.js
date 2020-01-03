const express = require('express');
const app = express();

//Will I need to require postgres/pg?

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

//app.use(express.static('./public'));

app.use(morgan('short'));