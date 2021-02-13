const {Schema, model} = require ('mongoose');

const comentarioSchema = new Schema ({
    
    nome:{
        type: String
    },

    mensagem:{
        type: String
    },
    
});


const modelo = model("comentarios", comentarioSchema)
module.exports = modelo