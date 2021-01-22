/* =================================================================
This pattern involves creating window, either subarray or set of pointers,
depending on conditions window can either increases or decreases or even
closes (new one is created). Very useful for tracking subsets of data
================================================================= */

/**
 * @param {number[]} arr
 * @param {number} size
 * @returns {number | null}
 */
function maxSubarraySum (arr, size) {
	if (arr.length < size) return null;
	let i = 0, tempSum = 0;
	for (; i < size; i++) {
		tempSum += arr[i];
	}
	let maxSum = tempSum;
	while (i < arr.length) {
		tempSum = tempSum - arr[i - size] + arr[i++];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

/** 
 * @param {number[]} arr array of positive integers
 * @param {number} num positive integer
 * @returns {number | null} returns mimimal length of contiguous subarray, which elements sum is equal to or greater than given number
 */
function minSubArrayLen (arr, num) {
	let len = 0, i = 0, j = 0, sum = arr[i];
	if (arr.length === 1) return sum >= num ? 1 : 0;

	while (i < arr.length) {
		if (sum < num && arr[j + 1]) {
			j++;
			sum += arr[j];
		} else {
			if (sum >= num) {
				len = len === 0 ? (j - i + 1) : Math.min(len, (j - i + 1));
				if (len === 1) return len;
				sum -= arr[i];
			}
			i++;
		}
	}
	return len;
}

/**
 * @param {string} str
 */
function findLongestSubstring (str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}

/* 
temp = 3, longest = 3
   i=2 
'thehcar'
    j=3
*/


console.log(findLongestSubstring('thehcattinthehat'));