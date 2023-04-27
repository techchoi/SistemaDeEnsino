const express = require('express') //importando as dependencias do express
const app = express() //criando objeto do express na variavel app
const port = 3000
const router = express.Router();


//exemplo simples de hello world
router.get('/',(req, res) => {
    res.send('Hello World!')
})


module.exports = router;