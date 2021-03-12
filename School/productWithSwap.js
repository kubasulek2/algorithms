/**
 * Takes bidimensional array of numbers and returns product of first row at those indexes 
 * where second row element of this index is equal or greater than third row element of this index.
 * Array will be transformed, so that every element at specific index in second row will be equal or greater that in third row.  * * Mutates the array.  
 * @param {Array} arr - at least 3 rows two dimensional square array
 */
function productWithSwap(arr) {
	function swap(idx) {
		const temp = arr[1][idx];
		arr[1][idx] = arr[2][idx]
		arr[2][idx] = temp;
	}
	let result = 1;
	for (let i = 0; i < arr[0].length; i++) {
		if (arr[1][i] >= arr[2][i]){
			result*=arr[0][i]
		} else {
			swap(i);
		};
	}
	return result;
}

const arr = [
	[2,6,4,5],
	[13,4,3,8],
	[1,6,3,6],
];


console.log(productWithSwap(arr));
console.log(arr);