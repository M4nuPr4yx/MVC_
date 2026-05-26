const pool = require('../config/db');

const chinelos = {
  // GET
  listarTodos: async () => {
    const [rows] = await pool.execute("SELECT * FROM chinelos");
    return rows;
  },

  // POST
  cadastrar: async (dados) => {
    const { marca, modelo, cor, tamanho, preco } = dados;

    const query = `
      INSERT INTO chinelos
      (marca, modelo, cor, tamanho, preco)
      VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
      marca,
      modelo || null,
      cor || null,
      tamanho || null,
      preco || null
    ];

    const [result] = await pool.execute(query, values);
    return result;
  },

  // PUT
  atualizar: async (id, dados) => {
    const query = `
      UPDATE chinelos
      SET marca = ?, modelo = ?, cor = ?, tamanho = ?, preco = ?
      WHERE id = ?
    `;

    const values = [
      dados.marca,
      dados.modelo || null,
      dados.cor || null,
      dados.tamanho || null,
      dados.preco || null,
      id
    ];

    const [result] = await pool.execute(query, values);
    return result.affectedRows;
  },

  // DELETE
  deletar: async (id) => {
    const [result] = await pool.execute(
      "DELETE FROM chinelos WHERE id = ?",
      [id]
    );

    return result.affectedRows;
  }
};

module.exports = chinelos;