'use strict';

const QuarkName = 'isNumeroAfiliados';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};