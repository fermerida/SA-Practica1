const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
var ClientOAuth2 = require('client-oauth2')

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
var githubAuth = new ClientOAuth2({
  clientId: 'abc',
  clientSecret: '123',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://example.com/auth/github/callback',
  scopes: ['notifications', 'gist']
})

// routes
app.use('/', rutas)

app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
})

module.exports = app
