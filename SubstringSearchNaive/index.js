function stringSearch (str, substr) {
	let counter = 0;
	for (let i = 0; i < str.length - (substr.length - 1); i++) {
		for (let j = 0; j < substr.length; j++) {
			if (str[i + j] !== substr[j]) break;
			if (j === substr.length - 1) {
				counter++;
				i = i + j;
			}
		}
	}
	return counter;
}
