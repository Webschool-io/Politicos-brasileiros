'use strict';

const QuarkName = 'isDataRegistroDefinitivo';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};