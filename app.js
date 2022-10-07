const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const router = require('./routes/comentRoutes');
const path = require('path')

mongoose.connect('mongodb://localhost/coments').then(()=>{
    console.log("Sucesso na conexção com o MongoDB");
}).catch((error) => {
    console.log(`Houve um erro: ${error}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', router)

app.listen(3000, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});