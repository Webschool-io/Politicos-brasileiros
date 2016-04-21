'use strict';

const AtomName = 'enderecoPartido';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}