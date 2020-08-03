var request = require('request');
const controller={};
AUX_API= "https://api.softwareavanzado.world/"

controller.index = function(req, res){
    var message = '';
    console.log('Yes')
  //res.render('login',{message: message});
  };
controller.dataget = function(req, res){
    API_KEYS = "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal"
    request({
      url: AUX_API + API_KEYS,
      method: 'GET',
    }, function(error, response){
      JSres = response.body
      res.json(JSON.parse(JSres)._embedded['item']); //res is the response object, and it passes info back to client side
    });
  };
controller.datapost = function(req, res){
    API_KEYS = "index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal";
    request.post({
      url: AUX_API + API_KEYS,
      body: JSON.stringify({"name": "201314713 - Contacto 1"})
    }, function(error, response,body){
      console.log(body); //res is the response object, and it passes info back to client side
    });
  };

  module.exports = controller;