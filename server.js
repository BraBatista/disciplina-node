const express = require('express')
const app = express()
// se o sistema operacional já definir uma variável de ambiente que tem o número da porta, ele usa, senão usa 3000
const PORTA = process.env.PORT || 3000

app.get('/', (req, res, next) => {
    res.send('Bem vindo ao Servidor Trabalho01 NodeJS <br>Aluno: Bráulio Batista Alvarenga Barbosa')
})

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})