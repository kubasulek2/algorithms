/* =================================================================
This pattern let use object as a way for storing data, what in turn let you reduce time complexity from n^2 to n.
For example in checking if two arrays have the same values but in different order
================================================================= */
/**
 * @param {number[]} arr_1
 * @param {number[]} arr_2
 * @returns {boolean}
 */
function haveArraysSameElements (arr_1, arr_2) {
	if (arr_1.length != arr_2.length) {
		return false;
	}
	const freq_1 = {}, freq_2 = {};
	for (let i = 0; i < arr_1.length; i++) {
		const key_1 = arr_1[i].toString(), key_2 = arr_2[i].toString();
		freq_1[key_1] = ++freq_1[key_1] || 1;
		freq_2[key_2] = ++freq_2[key_2] || 1;
	}

	for (const key in freq_1) {
		if (freq_1.hasOwnProperty(key)) {
			if (freq_1[key] != freq_2[key])
				return false;
		}
	}
	return true;
};

/**
 * @param {string} str_1
 * @param {string} str_2
 * @returns {boolean}
 */
function areStringsAnagrams (str_1, str_2) {
	if (str_1.length != str_2.length) {
		return false;
	}
	const lookup = {};

	for (let letter of str_1) {
		lookup[letter] = (lookup[letter] ?? 0) + 1;
	}

	for (let letter of str_2) {
		// either undefined or 0
		if(!lookup[letter]){
			return false;
		} else {
			lookup[letter]--;
		}
	}
	return true;
}

console.log(areStringsAnagrams('sett', 'tesm'));


/**
 * @param {number} num_1 positive integer
 * @param {number} num_2 positive integer
 * @return {boolean} do the numbers have the same frequency of digits
 */
function sameFrequency(num_1, num_2){
	let str_1 = num_1.toString(),
		str_2 = num_2.toString(),
		freq_1 = {},
		freq_2 = {};
	if(str_1.length !== str_2.length) return false;	
	for (let i = 0; i < str_2.length; i++) {
		freq_1[str_1[i]] = (freq_1[str_1[i]] || 0) + 1; 
		freq_2[str_2[i]] = (freq_2[str_2[i]] || 0) + 1; 
	}
	for (const key in freq_2) {
		if (freq_1[key] !== freq_2[key]) return false; 
	}
	return true
}

console.log('same frequency');

console.log(sameFrequency(34,14));