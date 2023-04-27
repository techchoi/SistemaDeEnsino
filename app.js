const express = require('express'); //importando as dependencias do express
const bodyParser = require('body-parser');

const app = express(); //criando um objeto para o express

app.use(bodyParser.json()); //converte o corpo para json

const aluno = require('./src/controllers/alunoControllers');

app.use('/api/aluno', aluno); //rota do local host

module.exports = app; // exportando o módulo app que é o express

