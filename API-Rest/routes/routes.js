const express = require('express')
const router = express.Router()
// generador de rutas

const controllers = require('../controllers/controllers')

router.get('/', controllers.index)
router.get('/dataget', controllers.dataget)
router.get('/datapost', controllers.datapost)

module.exports = router
