const express = require('express');
const App = express();
const path = require('path');
const apiRoute = require('./routes/api')
const PORT = 3000;

App.use("/api", apiRoute);

App.use(express.static(path.join(__dirname, "public")));


App.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})


