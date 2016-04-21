'use strict';

const QuarkName = 'isSite';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};