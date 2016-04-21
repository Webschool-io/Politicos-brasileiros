'use strict';

const AtomName = 'email';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
, required: true
}