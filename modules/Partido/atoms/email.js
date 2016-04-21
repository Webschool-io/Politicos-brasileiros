'use strict';

const AtomName = 'Email';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
, required: true
}