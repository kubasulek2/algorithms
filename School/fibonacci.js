
function fibRec (n) {
	if (n <= 1) return n;
	return fibRec(n - 1) + fibRec(n - 2);
}

function fibArr (n) {
	let arr = [1,1];
	for (let i = 2; i < n; i++) {
		arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[arr.length -1];
}

function fibVars (n) {
	let a = 1, b =1;
	for (let i = 2; i < n; i++) {
		let temp = b;
		b = a + b;
		a = temp; 		
	}
	return b;
}

//75025
console.log(fibVars(25));


