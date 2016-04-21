'use strict';

module.exports = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
