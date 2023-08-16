const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
id: {
    type: String,
    required: [true, "Nome é obrigatório"]
},
foto: String,
capa: String,
email:  {
    type: mongoose.Types.ObjectId,
    ref: 'Salao',
},
titulo:  {
    type: String,
    required: true,
},
preco:  {
    type: Number,
    required: true,
},
comissao:  {
    type: Number,
    required: true,
},
duracao:  {
    type: Number,
    required: true,
},
recorrencia:  {
    type: Number,
    required: true,
},
descricao:  {
    type: String,
    required: true,
},
status: {
    type: String,
    required: true,
    enum: ['A', 'I', 'E'],
    default: "A",
},

dataCadastro:{
    type: Date,
    default: Date.now,
}

});

salao.index({geo: 'dsphere'});

module.exports = mongoose.model('Servico', servico);