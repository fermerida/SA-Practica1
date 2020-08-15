const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')

const app = express()

// importing routes
const rutas = require('./routes/routes')

// settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')

// static files
app.set('views', path.join(__dirname, 'views'))

// midleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
app.use('/', rutas)

// inicio de servidor
app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
})

module.exports = app
