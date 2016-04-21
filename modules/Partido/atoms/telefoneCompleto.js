'use strict';

const AtomName = 'telefoneCompleto';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}