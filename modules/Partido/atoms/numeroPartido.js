'use strict';

const AtomName = 'numeroPartido';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
, required: true
}