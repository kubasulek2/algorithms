function pivot (arr, start = 0, end = arr.length - 1) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	// We are assuming the pivot is always the first element
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	// Swap the pivot from the start the swapPoint
	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort (arr, start = 0, end = arr.length - 1) {
	if (start < end) {
		const p = pivot(arr, start, end);
		quickSort(arr, start, p - 1);
		quickSort(arr, p + 1, end);
	}
	return arr;
}

console.log(quickSort([12, 4, 21, 14, 6, 16, 3, 11]));