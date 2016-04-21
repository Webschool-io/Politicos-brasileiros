'use strict';

const AtomName = 'EnderecoPartidoCEP';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}