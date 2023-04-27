const express = require('express') //importando as dependencias do express
const app = express() //criando objeto do express na variavel app
const port = 3000
const router = express.Router();


//exemplo simples de hello world
router.get('/',(req, res) => {
    res.send('Hello World!');
})

router.post('/',(req, res) => {
    const nome = req.body;
    console.log(req.body);
    res.json(req.body);
})

router.delete('/', (req, res) => {
    res.send('Aluno deletado!');
})

router.put('/',(req, res) => {
    res.send('Alteração realizada com sucesso !')
})

//o router é como se fosse um roteamento e serve para criar o controller
module.exports = router; 