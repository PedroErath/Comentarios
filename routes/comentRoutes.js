const express = require('express');
const router = express.Router();
const comentController = require('../controller/comentController')

router.get('/', comentController.allComents);

router.get('/add', (req, res) => {
    res.render('add', {error:false, body:{}});
});

router.get('/edit/:id', comentController.loadComent);

router.post('/edit/:id', express.urlencoded({extended:true}) ,comentController.editComent)

router.post('/add', express.urlencoded({extended:true}) ,comentController.addComent)

router.delete('/:id', comentController.deleteComent)

module.exports = router;