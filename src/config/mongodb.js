const mongoose = require("mongoose");
const app = require('../../app');


var PORT = 8080;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'shoppingList';


mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);