require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const pessoaRoutes = require('./src/routes/pessoasRoutes')
const produtoRoutes = require('./src/routes/produtosRoutes')
const acessoriosRoutes = require('./src/routes/acessoriosRoutes');

const app = express()
app.use(cors())
app.use(express.json())

app.use(pessoaRoutes)
app.use(produtoRoutes)
app.use(acessoriosRoutes);


const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`server em http://localhost:${PORT}`))














