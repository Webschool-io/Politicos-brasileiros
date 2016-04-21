'use strict';

const AtomName = 'Name';

module.exports = {
  type: String
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
, 
}