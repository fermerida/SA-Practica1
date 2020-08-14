var request = require('request')
const controller = {}
var AUX_API = 'https://api.softwareavanzado.world/'

controller.index = function (req, res) {
  var message = ''
  res.render('home', { message: message })
}
controller.dataget = function (req, res) {
  var API_KEYS = 'index.php?option=token&api=oauth2'
  request({
    url: AUX_API + API_KEYS,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    form: {
      grant_type: 'client_credentials',
      client_id: 'sa',
      client_secret: 'fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745'
    }
  }, function (error, response, body) {
    console.log('logger: ' + body)
    var bearer = JSON.parse(body).access_token
    console.log('Bearer ' + bearer)
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    } else {
      API_KEYS = '/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&filter[search]=201314713'
      request({
        url: AUX_API + API_KEYS,
        headers: {
          Authorization: 'Bearer ' + bearer
        },
        method: 'GET',
        rejectUnauthorized: false
      }, function (error2, response2) {
        var JSres = response2.body
        var contacts = JSON.parse(JSres)._embedded.item
        // res.json(contacts)
        // res is the response object, and it passes info back to client side
        if (error) {
          throw (error)
        } else if (response.statusCode === 200) {
          res.render('data', { contacts: contacts })
        }
      })
    }
  })
}

controller.datapost = function (req, res) {
  var API_KEYS = 'index.php?option=token&api=oauth2'
  request({
    url: AUX_API + API_KEYS,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    form: {
      grant_type: 'client_credentials',
      client_id: 'sa',
      client_secret: 'fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745'
    }
  }, function (error, response, body) {
    console.log('logger: ' + body)
    var bearer = JSON.parse(body).access_token
    console.log('Bearer ' + bearer)
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    } else {
      API_KEYS = 'index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal'
      request({
        url: AUX_API + API_KEYS,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + bearer
        },
        body: {
          name: '201314713 - Contacto 1'
        },
        rejectUnauthorized: false,
        json: true
      }, function (error, response) {
        // res is the response object, and it passes info back to client side
        if (error) {
          throw (error)
        } else {
          var message = 'Creado Satisfactoriamente'
          console.log(message)
          res.render('home', { message: message })
        }
      })
    }
  })
}

module.exports = controller
