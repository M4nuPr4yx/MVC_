require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const pessoaRoutes = require('./src/routes/pessoasRoutes')
const produtoRoutes = require('./src/routes/produtosRoutes')
const chinelosRoutes = require('./src/routes/chinelosRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use(pessoaRoutes)
app.use(produtoRoutes)
app.use(chinelosRoutes)


const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`server em http://localhost:${PORT}`))














