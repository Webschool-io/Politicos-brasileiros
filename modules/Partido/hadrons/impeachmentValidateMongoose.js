'use strict';

const QuarkName = 'isImpeachment';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};