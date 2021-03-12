/**
 * gets the result whole number of division
 */
function quotient (dividend, divisor) {
	let result = 0;
	while (dividend >= divisor) {
		dividend -= divisor;
		result++;
	}
	return result;
}

/**
 * gets the rest number (modulo) of division
 */
function rest (dividend, divisor) {
	let result = dividend;
	while (result >= divisor) {
		result = result - divisor;
	}
	return result;
}

/**
 * converts non negative whole numbers to binary representation
 * @param {number} number - non negative integer
 * @returns {string}
 */
function convertToBinary (number) {
	if (number === 0) return '0';
	let result = '';
	while(number > 0){
		result += rest(number,2);
		number = quotient(number,2);
	};
	return result.split('').reverse().join('');
};

console.log(convertToBinary(5));