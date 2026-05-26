const pool = require('../config/db');

const acessoriosModel = {
    listarTodos: async () => {
        const [rows] = await pool.execute('SELECT * FROM acessorios;');
        return rows;
    },

    criar: async (dados) => {
        const query = `
            INSERT INTO acessorios (nome, descricao, preco, quantidade)
            VALUES (?, ?, ?, ?);
        `;
        const values = [
            dados.nome,
            dados.descricao || null,
            dados.preco,
            dados.quantidade || 0
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },

    atualizar: async (id, dados) => {
        const query = `
            UPDATE acessorios
            SET nome = ?, descricao = ?, preco = ?, quantidade = ?
            WHERE id = ?;
        `;
        const values = [
            dados.nome,
            dados.descricao || null,
            dados.preco,
            dados.quantidade || 0,
            id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    }
};

module.exports = acessoriosModel;