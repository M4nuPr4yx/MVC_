const express = require('express');
const router = express.Router();
const chinelosController = require('../controller/chinelosController');

router.get('/chinelos', chinelosController.index);
router.post('/chinelos', chinelosController.store);
router.put('/chinelos/:id', chinelosController.update);
router.delete('/chinelos/:id', chinelosController.delete);

module.exports = router