'use strict';

const AtomName = 'EnderecoPartido';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}