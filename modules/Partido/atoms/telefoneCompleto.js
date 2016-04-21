'use strict';

const AtomName = 'TelefoneCompleto';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}