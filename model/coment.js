module.exports = {
    coments : [
        
    ],

    getAll(){
        return this.coments;
    },

    newComent(nome, description){
        this.coments.push({id:randomId(), nome, description})
    }
}

function randomId(){
    return Math.random().toString(36).substring(2,9);
}