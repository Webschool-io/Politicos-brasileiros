'use strict';

const AtomName = 'FaxCompleto';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}