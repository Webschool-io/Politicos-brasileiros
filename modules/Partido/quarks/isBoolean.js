'use strict';

module.exports = (value) => {
  const isTRUE = (value === true);
  const isFALSE = (value === false);

  if(isTRUE || isFALSE) return true;

  return false;
  
}
