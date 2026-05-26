const express = require('express')
const router = express.Router()
const calcasController = require('../controller/calcasController')

router.get('/calcas', calcasController.index)
router.delete('/calcasdelete/:id',calcasController.delete)
router.post('/calcas', calcasController.store);
router.put('/calcas/:id', calcasController.update);

module.exports = router
