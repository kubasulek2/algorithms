/* ==========================================================================
bubble sort in general has time complexity O(1/2n^2) == O(n^2), but if an array
is almost sorted (and we use optimized version of algorithm like below), 
in a way that, begining of array is not sorted but rest is it's quite good.
 ========================================================================== */
function bubbleSort(arr) {
	let temp, noSwaps;
	for (let i = arr.length - 2; i >= 0; i--) {
		for (let j = 0; j < i + 1; j++) {
			noSwaps=true
			if(arr[j] > arr[j+1]){
				noSwaps = false
				temp = arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = temp;
			}
		}
		if(noSwaps) break
	}
	return arr;
}

console.log(bubbleSort([7,1,2,3,4,5,6]))