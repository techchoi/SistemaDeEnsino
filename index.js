const express = require('express') //importando as dependencias do express
const app = express() //criando objeto do express na variavel app
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`O servidor está de ON na porta ${port}`)
})


