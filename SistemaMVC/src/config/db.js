require('dotenv').config()

const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, // Alterar para o usuário correspondente
    password: process.env.DB_PASS, // Alterar para a senha correspondente
    database: process.env.DB_NAME
})

module.exports = pool






