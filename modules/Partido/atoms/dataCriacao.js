'use strict';

const AtomName = 'dataCriacao';

module.exports = {
  type: String
, validate: require('./../hadrons/'+AtomName+'ValidateMongoose')
}