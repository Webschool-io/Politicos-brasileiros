'use strict';

const AtomName = 'NumeroAfiliados';

module.exports = {
  type: Number
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}
