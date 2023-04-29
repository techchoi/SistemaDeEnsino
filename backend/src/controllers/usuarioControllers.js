const express = require('express')
const app = express()
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Seja bem vindo !');
})

router.post('/', (req, res) => {
    const nome = req.body;
    console.log(req.body);
    res.json(req.body);
})

router.delete('/', (rep, res) => {
    res.send('Usuário deletado!');
})

router.put('/', (req, res) => {
    res.send('Usuário alterado com sucesso')
})

module.exports = router; 

