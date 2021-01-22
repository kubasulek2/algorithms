/* =================================================================
This pattern uses multiple pointer to reduce complexity from O(n^2) to O(N)
================================================================= */

/**
 * @param {number[]} arr array sorted from smallest to biggest
 * @returns {number[] | false} first par which sum gives 0 or false 
 */
function sumZero (arr) {
	let left = 0, right = arr.length - 1;
	while (left < right && arr[left] <= 0 && arr[right] >= 0) {
		let sum = arr[left] + arr[right];
		switch (true) {
			case sum === 0:
				return [arr[left], arr[right]];
			case sum > 0:
				j--;
				break;
			default:
				i++;
		}
	}
	return false;
}


/**
 * @param {number[]} arr array sorted from smallest to biggest
 * @returns {number} number of unique values 
 */
function countUniqueValues (arr) {
	if (!arr.length) return 0;
	let counter = 1, first = 0, second = 1;
	while (second < arr.length) {
		if (arr[first] === arr[second]) {
			second++;
		} else {
			first = second;
			second += 1;
			counter++;
		}
	}
	return counter;
}


/**
 * Time complexity O(n), space complexity O(1)
 * @param {number[]} arr
 * @param {number} num
 * @returns {boolean}
 */
function averagePair (arr, num) {
	let first = 0, last = arr.length - 1;
	while (first < last){
		let avg = (arr[first] + arr[last]) / 2
		switch (true) {
			case avg === num:
				return true;
			case avg > num:
				last--;
				break;
			default:
				first++		
		}
	}
	return false
}


/**
 * @param {string} str_1
 * @param {string} str_2
 */
function isSubsequence (str_1, str_2) {
	let i = 0, pointer = 0;
	if (str_1.length > str_2.length) return false
	while(i < str_2.length){
		if (str_1[pointer] === str_2[i]) pointer++
		i++;
		if(pointer === str_1.length) return true;
	}
	return false;
};


/**
 * @param {string} str1
 * @param {string} str2
 */
function isSubsequenceRecursive(str1, str2) {
	if(!str1.length) return true;
	if(!str2.length) return true;
	if(str1[0] === str2[0]) return isSubsequenceRecursive(str1.slice(1), str2.slice(2))
	return isSubsequenceRecursive(str1, str2.slice(1));
}
isSubsequence('ab', 'skab')
/*
sprawdzaj czy str_2 na pozycji i == str_1 na pozycji pointer
	jesli tak przesun pointer o 1
	jesli nie przesun i o 1

jesli pointer ma dlugość stringa true
*/