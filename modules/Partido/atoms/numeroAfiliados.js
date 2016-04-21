'use strict';

const AtomName = 'numeroAfiliado';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}