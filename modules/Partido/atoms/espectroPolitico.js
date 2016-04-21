'use strict';

const AtomName = 'EspectroPolitico';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}