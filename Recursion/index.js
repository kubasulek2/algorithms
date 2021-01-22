/**
 * @param {string} str
 * @returns {string}
 */
function reverseStr (str) {
	if (str.length <= 1) {
		return str;
	}
	return str[str.length - 1] + reverseStr(str.slice(0, -1));

}

/**
 * @param {number} num
 * @returns {number}
 */
function factorial (num) {
	if (num < 1) throw TypeError('Incorrect input');
	return num === 1 ? 1 : num * factorial(num - 1);
}

/**
 * @param {number} num
 * @param {number} pow
 * @returns {number}
 */
function power (num, pow) {
	if (pow === 0) return 1;
	if (pow === 1) return num;
	return num * power(num, pow - 1);
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function productOfArray (arr) {
	if (!arr.length) return 0;
	return arr[0] + productOfArray(arr.slice(1));
}



function recursiveRange (num) {
	function helper (i) {
		if (i >= num) return num;
		return i + helper(++i);
	}

	return helper(0);
}

function fib (n) {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
}

function isPalindrome (str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];

	if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
	return false;

}

/**
 * @param {number[]} arr
 * @param {Function} cb
 * @returns {boolean} true if single array value passed to cb returns true
 */
function someRecursive (arr, cb) {
	if (cb(arr[0]) === true) return true;
	if (arr.length === 1) return false;
	return someRecursive(arr.slice(1), cb);
}



/**
 * @param {any[]} arr - nested array of arrays
 * @returns {number[]} flatten array of numbers
 */
function flatten (arr) {
	let flat = [];
	function traverse (n) {
		if (typeof n === 'number') {
			flat.push(n);
		} else {
			n.forEach(el => traverse(el));
		};
	}
	traverse(arr);
	return flat;

}


/**
 * @param {string[]} oldArr - nested array of arrays
 * @returns {string[]} array of capitalized strings
 */
function capitalizeFirst (oldArr) {
	let newArr = [];
	for (let i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(capitalizeFirst(oldArr[i]));
		} else if (typeof oldArr[i] === 'string') {
			newArr.push(oldArr[i][0].toUpperCase() + oldArr[i].slice(1));
		}
	}
	return newArr;
}


/**
 * @param {object} obj 
 * @returns {number} sum of all the even numbers in this object
 */
function nestedEvenSum (obj) {
	let sum = 0;
	for (const key in obj) {
		if (typeof obj[key] === 'number' && !(obj[key] % 2)) {
			sum += obj[key];
		} else if (typeof obj[key] === 'object' && obj[key] !== null) {
			sum += nestedEvenSum(obj[key]);
		};
	}
	return sum;
}

function capitalizeWords (array) {
	let capitalized = [];
	for (const item of array) {
		if (typeof item === 'string') capitalized.push(item.toUpperCase());
		else if (Array.isArray(item)) capitalized = capitalized.concat(capitalizeWords(item));
	}

	return capitalized;
}


let words = ['i', 'am', 'learning', ['recursion', 'again']];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']