'use strict';

const AtomName = 'espectroPolitico';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}