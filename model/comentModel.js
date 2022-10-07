const mongoose = require('mongoose');

const comentSchema = new mongoose.Schema({
    name: {type:String, required:true},
    coment: {type:String, required:true},
});

module.exports = mongoose.model('Coment', comentSchema);