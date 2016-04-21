'use strict';

const AtomName = 'ideologia';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}