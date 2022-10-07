const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const comentRoutes = require('./routes/comentRoutes');
const path = require('path');

mongoose.connect("mongodb://localhost/coments");

let db = mongoose.connection;

db.on("error", () => {console.log("Houve um erro")});
db.once("open" , () => {console.log("Banco carregado")});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', comentRoutes);

app.listen(3000, () => {console.log(`Servidor rodando na porta: ${port}`)})