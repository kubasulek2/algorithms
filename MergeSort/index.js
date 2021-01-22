function merge (arr1, arr2) {
	let j = 0, i = 0, result = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) result.push(arr1[i++]);
		else result.push(arr2[j++]);
	}
	while (i < arr1.length) result.push(arr1[i++]);
	while (j < arr2.length) result.push(arr2[j++]);
	return result;
}


function mergeSort (arr) {
	if (arr.length <= 1) return arr;
	const half = Math.floor((arr.length / 2));
	const left = mergeSort(arr.slice(0, half));
	const right = mergeSort(arr.slice(half));
	return merge(left, right)

}

console.log(mergeSort([14,2,6,8,3,11,13,4]));