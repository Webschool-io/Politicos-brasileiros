const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {

  sigla: require('./../atoms/sigla')
, nome: require('./../atoms/nome')
//, numero: require('./../atoms/numero') ? Que numero eh esse ? 
, numeroPartido: require('./../atoms/numeroPartido');
, presidente: require('./../atoms/presidente')
, dataCriacao: require('./../atoms/dataCriacao')
, dataRegistroDefinitivo: require('./../atoms/dataRegistroDefinitivo')
, numeroAfiliados: require('./../atoms/numeroAfiliados')
, espectroPolitico: require('./../atoms/espectroPolitico')
, ideologia: require('./../atoms/ideologia')
, site: require('./../atoms/site')
, email: require('./../atoms/email')
, telefoneCompleto: require('./../atoms/telefoneCompleto')
, faxCompleto: require('./../atoms/faxCompleto')
, enderecoPartido: require('./../atoms/enderecoPartido')
, impeachment: require('./../atoms/impeachment')

}

module.exports = new Schema(Molecule);
