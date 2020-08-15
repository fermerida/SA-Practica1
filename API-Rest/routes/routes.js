const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')
// declaración de rutas para las acciones en el controlador
router.get('/', controllers.index)
router.get('/dataget', controllers.dataget)
router.get('/datapost', controllers.datapost)

// exportar modulo
module.exports = router
