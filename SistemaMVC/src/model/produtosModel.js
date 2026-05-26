const pool = require('../config/db')

const Produto = {
    listarTodos: async ()=>{
        const [rows] = await pool.execute('SELECT * FROM produtos')
        return rows
    },
    inserirProdutos: async (req)=>{
        const { nome, descricao, preco, estoque, categoria } = req.body;

        const query = `
            INSERT INTO produtos 
            (nome, descricao, preco, estoque, categoria) 
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            nome,
            descricao,
            preco || null,
            estoque,
            categoria || null
        ];

        const [result] = await pool.execute(query, values);
        return result;
    },
    atualizarProdutos: async (req)=>{
        const { id } = req.params;
        const { nome, descricao, preco, estoque, categoria } = req.body;

        const query = `
            UPDATE produtos
            SET nome = ?, descricao = ?, preco = ?, estoque = ?, categoria = ?
            WHERE id = ?
        `;

        const values = [
            nome,
            descricao,
            preco || null,
            estoque,
            categoria || null,
            id
        ];

        const [result] = await pool.execute(query, values);
        return result;
    },
    deletar: async (id) =>{
        const [result] = await pool.execute('DELETE FROM produtos WHERE id = ?', [id])
        return result.affectedRows
    }
}


module.exports = Produto