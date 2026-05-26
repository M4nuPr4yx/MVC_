const Produto = require('../model/produtosModel')
const pool = require('../config/db')

const produtoController = {
    index: async (req,res)=>{
        try {
            const produto = await Produto.listarTodos()
            res.json(produto)    
        } catch (error) {
            res.status(500).json
        }

    },
    inserir: async (req,res)=>{
        try {
            const result = await Produto.inserirProdutos(req)
            res.status(201).json({ id: result.insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    atualizar: async (req,res)=>{
        try {
            const result = await Produto.atualizarProdutos(req);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }

            res.json({ id: req.params.id, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req,res) => {
        const { id } = req.params
        try {
            const affectedRows = await Produto.deletar(id)
            if (affectedRows == 0) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }
            res.status(204).send()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    

}

module.exports = produtoController