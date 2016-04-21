'use strict';

const AtomName = 'sigla';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
, required: true
}