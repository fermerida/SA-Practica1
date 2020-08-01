const express = require('express');
const router = express.Router();//generador de rutas

const controllers = require('../controllers/controllers');

router.get('/',controllers.index);

module.exports = router;