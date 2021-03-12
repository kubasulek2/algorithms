/* ==========================================================================
bubble sort in general has time complexity O(1/2n^2) == O(n^2), but if an array
is almost sorted (and we use optimized version of algorithm like below), 
in a way that, begining of array is not sorted but rest is it's quite good.
 ========================================================================== */
// function bubbleSort(arr) {
// 	let temp, noSwaps;
// 	for (let i = arr.length - 2; i >= 0; i--) {
// 		for (let j = 0; j < i + 1; j++) {
// 			// noSwaps=true
// 			if(arr[j] > arr[j+1]){
// 				// noSwaps = false
// 				temp = arr[j+1]
// 				arr[j+1] = arr[j]
// 				arr[j] = temp;
// 			}
// 		}
// 		console.log(i, arr);
// 		// if(noSwaps) break
// 	}
// 	console.log('final', arr);
// 	return arr;
// }

let bubbleSort = (inputArr) => {
	let len = inputArr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (inputArr[j] > inputArr[j + 1]) {
				let tmp = inputArr[j];
				inputArr[j] = inputArr[j + 1];
				inputArr[j + 1] = tmp;
			}
		}
		console.log(i,inputArr)
	}
	return inputArr;
};

bubbleSort([3, 5, 2, 1, 4, 6, 3, 2, 5]);