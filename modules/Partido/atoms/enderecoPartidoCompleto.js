'use strict';

const AtomName = 'EnderecoPartidoCompleto';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}