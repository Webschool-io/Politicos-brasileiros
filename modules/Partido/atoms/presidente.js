'use strict';

const AtomName = 'Presidente';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}