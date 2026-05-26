const acessoriosModel = require('../model/acessoriosModel');

const acessoriosController = {
    index: async (req, res) => {
        try {
            const acessorios = await acessoriosModel.listarTodos();
            res.json(acessorios);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const insertId = await acessoriosModel.criar(req.body);
            res.status(201).json({ id: insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const affectedRows = await acessoriosModel.atualizar(id, req.body);
            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Acessório não encontrado' });
            }
            res.json({ id, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = acessoriosController;