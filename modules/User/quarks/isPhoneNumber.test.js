'use strict';

const valueTRUE = '99990000';
const valueFALSE = 'a';

const validateTRUE = require('./isPhoneNumber')(valueTRUE);
const validateFALSE = require('./isPhoneNumber')(valueFALSE);

console.log(valueTRUE+' is Phone Number?', validateTRUE);
console.log(valueFALSE+' is Phone Number?', validateFALSE);