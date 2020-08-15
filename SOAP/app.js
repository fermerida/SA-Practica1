// se utilizo easy-soap-request para conseguir el comportamiento
const soapRequest = require('easy-soap-request')
const fs = require('fs')

// agregar url para la llamada
const url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl'

// definir los headers a enviar
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  soapAction: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl'
}
// se lee el mensaje a enviar en un evelope hacia el servidor
const xml = fs.readFileSync('envelope.xml', 'utf-8');

// utilización del modulo
(async () => {
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 })
  // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response
  console.log(headers)
  console.log(body)
  console.log(statusCode)
})()
