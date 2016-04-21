'use strict';

const QuarkName = 'isEnderecoPartidoCEP';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};