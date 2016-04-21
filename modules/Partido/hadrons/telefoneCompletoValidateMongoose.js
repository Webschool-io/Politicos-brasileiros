'use strict';

const QuarkName = 'isTelefoneCompleto';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};