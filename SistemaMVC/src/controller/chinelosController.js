const chinelos = require('../model/chinelosModel');

const chinelosController = {
  // GET
  index: async (req, res) => {
    try {
      const chinelo = await chinelos.listarTodos();
      res.json(chinelo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // POST
  store: async (req, res) => {
    try {
      const result = await chinelos.cadastrar(req.body);

      res.status(201).json({
        id: result.insertId,
        ...req.body
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // PUT
  update: async (req, res) => {
    const { id } = req.params;

    try {
      const affectedRows = await chinelos.atualizar(id, req.body);

      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Chinelo não encontrado' });
      }

      res.json({ message: 'Chinelo atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // DELETE
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const affectedRows = await chinelos.deletar(id);

      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Chinelo não encontrado' });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = chinelosController;