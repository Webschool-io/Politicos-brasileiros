const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  nome: require('./../atoms/name')
, email: require('./../atoms/email')
, senha: require('./../atoms/password')
, telefones: [require('./telefone')]
}
module.exports = new Schema(Molecule);

// { "nome": "string", "email": "string", "senha": "senha", "telefones": [ { "numero": "123456789", "ddd": "11" } ] }