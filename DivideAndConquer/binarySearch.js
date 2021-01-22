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

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11],11));

/*
 [1,2,4,6,8,9,12] 9
 a[len/2] = 9 ?

*/