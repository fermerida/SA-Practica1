const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const myConnection = require('express-myconnection');
//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));