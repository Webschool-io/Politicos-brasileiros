'use strict';

const QuarkName = 'isEnderecoPartido';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};