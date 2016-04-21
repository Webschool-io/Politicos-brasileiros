'use strict';

const QuarkName = 'isEspectroPolitico';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};