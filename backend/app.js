const express = require('express'); //importando as dependencias do express
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

var PORT = 27017;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'shoppingList';

const app = express(); //criando um objeto para o express

mongoose.connect('mongodb://localhost:27017/sistema');

app.use(bodyParser.json()); //converte o corpo para json
//configurando formulario de login
app.use(bodyParser.urlencoded({
    extended: true
 }));

const aluno = require('./src/controllers/alunoControllers');
const usuario = require('./src/controllers/usuarioControllers');
const curso = require('./src/controllers/cursoControllers');

app.use('/api/aluno', aluno); //rota do local host
app.use('/api/usuario', usuario); //rota do usuario 
app.use('/api/curso', curso); //rota do curso


module.exports = app; // exportando o módulo app que é o express

