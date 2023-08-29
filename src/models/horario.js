const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({

    salaoId: {
        type: mongoose.Types.ObjectId,
        ref:'Salao',
        required: [true, "Nome é obrigatório"]
    },

    especialidade:[
        {
        type: mongoose.Types.ObjectId,
        ref:'Servico',
        required: true
        },
],
colaborador:[
    {
    type: mongoose.Types.ObjectId,
    ref:'Colaborador',
    required: true
    },
],
dias:{
    type: [Number],
    require: true
},

inicio:{
    type: Date,
    require: true
},
fim:{
    type: Date,
    require: true
},
dataCadastro:{
    type: Date,
    default: Date.now,
}

});


module.exports = mongoose.model('Horario', horario);