/**
 * @param {number[]} arr array of sorted numbers,
 * @param {number} num number to find
 * @returns {number} index or -1 if not found
 */
function binarySearch (arr, num) {
	let min = 0, max = arr.length - 1;
	while (max >= min) {
		let middle = Math.floor((max + min) / 2);
		if (arr[middle] === num) return middle;
		else if (arr[middle] > num) max = middle - 1;
		else if (arr[middle] < num) min = middle + 1;
	}
	return -1;

}

function binarySearchRecursive (arr, num, min = 0, max = arr.length - 1) {
	let index = Math.floor((min + max) / 2);

	if (arr[index] === num) return index;
	else if (min === max) return -1;
	else if (arr[index] > num) return binarySearchRecursive(arr, num, min, index - 1);
	else if (arr[index] < num) return binarySearchRecursive(arr, num, index + 1, max);
}
