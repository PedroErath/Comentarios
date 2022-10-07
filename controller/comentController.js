const Coment = require('../model/comentModel');

const addComent = async (req, res) => {
    let coment = new Coment(req.body);
    
    try {
        await coment.save();
        res.redirect('/')
    } catch (error) {
        res.render('add', {error, body:req.body});
    }
};

const allComents = async (req, res) => {
    try {
        let coments = await Coment.find({});
        res.render('all', {coments});
    } catch (error) {
        res.send(error);
    }
};

const deleteComent = async (req, res) => {
    let id = req.params.id;

    try {
        await Coment.findByIdAndDelete(id);
        res.send(id);
    } catch (error) {
        res.send(error);
    }
};

const loadComent = async (req, res) => {
    let id = req.params.id;

    try {
        let coment = await Coment.findById(id);
        res.render('edit', {error: false, body: coment})
    } catch (error) {
        res.send(error);
    }
}

const editComent = async (req, res) => {
    let id = req.params.id;
    let coment = {};
    coment.name = req.body.name;
    coment.coment = req.body.coment;

    try {
        await Coment.updateOne({_id:id}, coment);
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
};

module.exports = {addComent, allComents, deleteComent, loadComent, editComent};