const geometricMean = (...numbers) => Math.pow(numbers.reduce((sum,cur) => sum*=cur,1), 1 / numbers.length);

console.log(geometricMean(2,25));
