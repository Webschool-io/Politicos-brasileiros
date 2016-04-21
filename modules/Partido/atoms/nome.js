'use strict';

const AtomName = 'name';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
, 
}