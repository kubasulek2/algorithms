function recLoop (end, index=0, result=1) {
	if(index>=end) return result;
	result += index;
	return recLoop(end, index, result);
}

console.log(recLoop(500000));