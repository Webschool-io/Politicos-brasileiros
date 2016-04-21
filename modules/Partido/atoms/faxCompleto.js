'use strict';

const AtomName = 'faxCompleto';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}