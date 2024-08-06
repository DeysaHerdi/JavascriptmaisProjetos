const porta = 3003

const e = require('express')
const express = require('express')
const app = express()

// app.get('/produtos', (req, res, next) =>{
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) =>{
    res.send({nome:'Notebook', preco: 123.45}) //converte pra Json
})

app.listen(porta, ()=>{
    console.log(`Servidor ta na porta ${porta}`)
})