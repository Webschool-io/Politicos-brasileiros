'use strict';

const AtomName = 'Impeachment';

module.exports = {
  type: Boolean
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}