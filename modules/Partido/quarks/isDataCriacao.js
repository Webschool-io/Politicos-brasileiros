'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty')(value);
  const isDate = require('./isDate')(value);

  if(isEmpty) return false;
  if(!isDate) return false;


  //const today = new Date();
  //return value.setHours(0,0,0,0) < today.setHours(0,0,0,0);
  return true;
};
