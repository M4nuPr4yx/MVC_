const pool = require('../config/db')

const Blusa = {
    listarTodos: async ()=>{
        const [rows] = await pool.execute('SELECT * FROM blusas')
        return rows
    },
    deletar: async (id) =>{
        const [result] = await pool.execute('DELETE FROM blusas WHERE id = ?', [id])
        return result.affectedRows
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO blusas
        (nome, marca, cor, tamanho, genero, preco)
        VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
        dados.nome,
        dados.marca || null,
        dados.cor || null,
        dados.tamanho || null,
        dados.genero || null,
        dados.preco || null,
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },
    atualizar: async (id, dados) => {
        const query = `
        UPDATE blusas
        SET nome = ?, marca = ?, cor = ?, tamanho = ?,
            genero = ?, preco = ?
        WHERE id = ?
        `;
        const values = [
            dados.nome,
            dados.marca ?? null,
            dados.cor ?? null,
            dados.tamanho ?? null,
            dados.genero ?? null,
            dados.preco ?? null,
            id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    }
        
    
}

module.exports = Blusa
