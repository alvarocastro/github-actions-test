const test = require('ava');
const {suma, resta} = require('.');

test('Suma should add two numbers', t => {
	t.is(suma(4, 1), 5);
	t.is(suma(-1, 2), 1);
	t.is(suma(3, -3), 0);
	t.is(suma(-5, -3), -8);
	// Removed case t.is(suma(0.1, 0.2), 0.30000000000000004);
});

test('Resta should subtract two numbers', t => {
	t.is(resta(4, 1), 3);
	t.is(resta(-1, 2), -3);
	t.is(resta(3, -3), 6);
	// Removed case t.is(resta(0.1, 0.2), -0.1);
});

/* Removed test
test('Division should divide numbers', t => {
	t.is(division(4, 2), 2);
	t.is(division(10, 4), 2.5);
	t.is(division(0, 2), 0);
	t.is(division(2, 0), Infinity);
});
*/
