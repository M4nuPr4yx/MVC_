const express = require('express')
const router = express.Router()
const produtoController = require('../controller/produtosController')

router.get('/produtos', produtoController.index)
router.post('/inserirproduto', produtoController.inserir)
router.delete('/delproduto/:id', produtoController.delete)
router.put('/atualizarprodutos/:id', produtoController.atualizar)


module.exports = router