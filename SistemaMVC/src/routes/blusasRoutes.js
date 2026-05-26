const express = require('express')
const router = express.Router()
const pessoaController = require('../controller/blusasController')
const blusaController = require('../controller/blusasController')

router.get('/blusas', blusaController.index)
router.delete('/blusas/:id',blusaController.delete)
router.post('/blusas', blusaController.store);
router.put('/blusas/:id', blusaController.update);

module.exports = router
