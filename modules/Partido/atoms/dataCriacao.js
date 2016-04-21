'use strict';

const AtomName = 'DataCriacao';

module.exports = {
  type: Date
, validate: require('./../hadrons/ValidateMongoose')('is'+AtomName)
}