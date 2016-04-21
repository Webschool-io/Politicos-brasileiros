const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  ddd: require('./../atoms/phoneDDD')
, numero: require('./../atoms/phoneNumber')
}
module.exports = new Schema(Molecule);
