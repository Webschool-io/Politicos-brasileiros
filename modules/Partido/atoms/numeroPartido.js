'use strict';

const AtomName = 'NumeroPartido';

module.exports = {
  type: Number
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
, required: true
}