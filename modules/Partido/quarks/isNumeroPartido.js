'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty')(value);
  const isNumber = require('./isNumber')(value);

  if(isEmpty) return false;
  if(!isNumber) return false;

  return true;

}
