'use strict';

const QuarkName = 'isFaxCompleto';

module.exports = {
  validator: require('./../quarks/'+QuarkName)
, message: require('./../quarks/'+QuarkName+'Message')
};