const suma = function (a, b) {
	return Math.round(a + b);
};

const resta = function (a, b) {
	return Math.round(a - b);
};

const multiplicacion = function (a, b) {
	return a * b;
};

/* Removed feature
const division = function (a, b) {
	return a / b;
};
*/

module.exports = {
	suma,
	resta,
	multiplicacion
};
