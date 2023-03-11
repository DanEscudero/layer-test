const isNumber = require('is-number');

const handler = function () {
	console.log('isNumber(123)', isNumber(123));
	console.log('isNumber(\'asd\')', isNumber('asd'));
}

exports.handler = handler;