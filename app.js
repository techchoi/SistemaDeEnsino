const express = require('express'); //importando as dependencias do express

const app = express(); //criando um objeto para o express

const aluno = require('./src/controllers/alunoControllers');

app.use('/api/aluno', aluno);

module.exports = app; // exportando o módulo app que é o express

