var request = require('request')
const controller = {}
var AUX_API = 'https://api.softwareavanzado.world/'

controller.index = function (req, res) {
  var message = ''
  res.render('home', { message: message })
}
controller.dataget = function (req, res) {
  var API_KEYS = '/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&filter[search]=201314713'
  request({
    url: AUX_API + API_KEYS,
    method: 'GET'
  }, function (error, response) {
    var JSres = response.body
    var contacts = JSON.parse(JSres)._embedded.item
    // res.json(JSON.parse(JSres)._embedded.item)
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    } else if (response.statusCode === 200) {
      res.render('data', { contacts: contacts })
    }
  })
}

controller.datapost = function (req, res) {
  var API_KEYS = 'index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal'
  var header = {
    'Content-Type': 'application/json'
  } 
  request({
    url: AUX_API + API_KEYS,
    body: { 
      "name": "201314713 - Contacto 1",
      "name": "201314713 - Contacto 2",
      "name": "201314713 - Contacto 3" ,
      "name": "201314713 - Contacto 4" ,
      "name": "201314713 - Contacto 5" ,
      "name": "201314713 - Contacto 6" ,
      "name": "201314713 - Contacto 7" ,
      "name": "201314713 - Contacto 8" , 
      "name": "201314713 - Contacto 9" , 
      "name": "201314713 - Contacto 10"  
    },
    headers: header,
    json: true
  }, function (error, response, body) {
    console.log(body)
    // res is the response object, and it passes info back to client side
    if (error) {
      throw (error)
    }else {
      message = 'Creado Satisfactoriamente'
			console.log(message)
		  res.render('home', { message: message} )
    }
  })
}

module.exports = controller
