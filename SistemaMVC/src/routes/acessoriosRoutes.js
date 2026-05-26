const express = require('express');
const router = express.Router();
const acessoriosController = require('../controller/acessoriosController');

router.get('/acessorios', acessoriosController.index);
router.post('/acessorios', acessoriosController.store);
router.put('/acessorios/:id', acessoriosController.update);

module.exports = router;