'use strict';

const AtomName = 'dataRegistroDefinitivo';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}