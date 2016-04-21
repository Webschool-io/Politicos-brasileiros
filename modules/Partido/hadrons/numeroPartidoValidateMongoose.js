'use strict';

const QuarkName = 'isNumeroPartido';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};