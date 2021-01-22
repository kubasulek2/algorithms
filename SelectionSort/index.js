/* ==========================================================================
Selection sort in general has time complexity O(1/2n^2) == O(n^2)
 ========================================================================== */
/**
 * @param {number[]} arr
 * @returns {number[]} 
 */
function selectionSort (arr) {
	let minIndex;
	for (let i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		};
		if (minIndex !== i) {
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}
	return arr;
}


console.log(selectionSort([12,4,3,15,6]));