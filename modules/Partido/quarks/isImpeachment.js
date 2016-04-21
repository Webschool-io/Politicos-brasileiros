'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty')(value);
  const isBoolean = require('./isBoolean')(value);

  if(isEmpty) return false;
  if(!isBoolean) return false;

  return true;

}
