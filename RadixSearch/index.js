/**
 * @param {number} num
 * @param {number} i
 */
function getDigit (num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
/**
 * @param{number} num
 */
function digitCount (num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * @param {number[]} arr
 */
function mostDigits (arr) {
	let max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		arr[i] > max && (max = arr[i]);
	}
	return digitCount(max);
}

/**
 * @param {number[]} arr
 */
function radixSearch (arr) {
	const maxDigit = mostDigits(arr);
	for (let i = 0; i < maxDigit; i++) {
		const digitBucket = Array.from(Array(10),() => []);
		for (let j = 0; j < arr.length; j++) {
			const digit = getDigit(arr[j], i);
			digitBucket[digit].push(arr[j]);
		}
		arr = [].concat(...digitBucket);
	}
	return arr;
}



console.log(radixSearch([321, 1456, 22, 13, 156, 4, 55000]));