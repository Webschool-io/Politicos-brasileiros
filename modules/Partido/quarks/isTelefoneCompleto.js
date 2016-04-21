'use strict';

module.exports = (value) => {
  const regex = /^[9]?[0-9]{8,10}$/;
  const isEmpty = require('./isEmpty')(value);
  const isString = require('./isString')(value);

  if(isEmpty) return false;
  if(!isString) return false;

  return regex.test(value);
}
