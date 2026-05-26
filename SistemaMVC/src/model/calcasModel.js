const pool = require('../config/db')

const Calcas = {
    listarTodos: async ()=>{
        const [rows] = await pool.execute('SELECT * FROM calcas')
        return rows
    },
    deletar: async (id) =>{
        const [result] = await pool.execute('DELETE FROM calcas WHERE id = ?', [id])
        return result.affectedRows
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO calcas
        (nome, numero, preco)
        VALUES (?, ?, ?)
        `;
        const values = [
        dados.nome,
        dados.numero,
        dados.preco
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },
    atualizar: async (id, dados) => {
        const query = `
        UPDATE calcas
        SET nome = ?, numero = ?, preco = ?
        WHERE id = ?
        `;
        const values = [
        dados.nome,
        dados.numero,
        dados.preco,
        id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    }
        
    
}

module.exports = Calcas