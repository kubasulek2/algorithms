/* ==========================================================================
Insertion sort in general has time complexity O(1/2n^2) == O(n^2), but if data is
mostly sorted it is good algorithm, also adding numbers one by one to previously
sorted array can be efficiently done with insertion sort
 ========================================================================== */
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort (arr) {

	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j+1] = arr[j]
		}
		arr[j+1] = currentVal;

	}
	return arr;
}

let arr1 = [2, 1, 9, 76, 4], arr2 = [6, 4, 2, 3, 9, 8];
console.log(insertionSort(arr1));

