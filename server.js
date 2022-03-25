const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    let datahora_req = new Date()
    console.log(`${datahora_req.toLocaleString()} --> ${req.path} - ${req.get('content-type')}`)
    next()
})

app.get('/', (req, res, next) => {
    res.json({nome: 'Bráulio Batista Alvarenga Barbosa', cidade: 'Timóteo'})
})

const PORTA = process.env.PORT || 3000
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})