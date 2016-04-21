'use strict';

const AtomName = 'NumeroAfiliado';

module.exports = {
  type: Number
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}