'use strict';

const QuarkName = 'isEnderecoPartidoCompleto';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};