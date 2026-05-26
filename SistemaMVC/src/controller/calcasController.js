const Calcas = require('../model/calcasModel')

const calcasController = {
    index: async (req,res)=>{
        try {
            const calcas = await Calcas.listarTodos()
            res.json(calcas)    
        } catch (error) {
            res.status(500).json
        }
    },
    delete: async (req,res) => {
        const { id } = req.params
        try {
            const affectedRows = await Calcas.deletar(id)
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
            const insertId = await Calcas.criar(req.body);
            res.status(201).json({ id: insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
        const affectedRows = await Calcas.atualizar(id, req.body);
        if (affectedRows === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json({ id, ...req.body });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }
        
}

module.exports = calcasController