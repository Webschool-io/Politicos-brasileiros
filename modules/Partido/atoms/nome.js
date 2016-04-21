'use strict';

const AtomName = 'nome';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
, 
}