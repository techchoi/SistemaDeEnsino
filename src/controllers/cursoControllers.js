const express = require('express')
const app = express()
const router = express.Router();

router.get('/',(req,res) => {
    res.send('Cursos !');
})

router.post('/', (req, res) => {
    const nome = req.body;
    console.log(req.body);
    res.json(req.body);
})

router.delete('/', (req, res) => {
    res.send('Curso deletado!');
})

router.put('/', (req, res) => {
    res.send('Curso alterado com sucesso !')
})

module.exports = router; 