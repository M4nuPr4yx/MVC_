const Blusa = require('../model/blusasModel')

const blusaController = {
    index: async (req,res)=>{
        try {
            const blusa = await Blusa.listarTodos()
            res.json(blusa)    
        } catch (error) {
            res.status(500).json
        }
    },
    delete: async (req,res) => {
        const { id } = req.params
        try {
            const affectedRows = await Blusa.deletar(id)
            if (affectedRows == 0) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }
            res.status(204).send()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
    store: async (req, res) => {
        try {
            const insertId = await Blusa.criar(req.body);
            res.status(201).json({ id: insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
        const affectedRows = await Blusa.atualizar(id, req.body);
        if (affectedRows === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json({ id, ...req.body });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }
        
}

module.exports = blusaController