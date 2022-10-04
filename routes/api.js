const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const coment = require('../model/coment');

router.get("/all", (req, res) =>{
    res.json(JSON.stringify(coment.getAll()))
})

router.post("/new", bodyParser.json(), (req, res) =>{

    if(req.body.nome != null & req.body.nome != "" & req.body.description != null & req.body.description != ""){
        let nome = req.body.nome;
        let description = req.body.description;

        coment.newComent(nome, description);
        res.send("Comentário adicionado");
    }else{
        res.send("Campo vazio")
    }

})

module.exports = router;