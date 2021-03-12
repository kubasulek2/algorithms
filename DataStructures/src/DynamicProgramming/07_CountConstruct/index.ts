export function countConstruct (targetWord: string, wordbank: string[], index = 0, memo:any={}): number
{
	if (index in memo) return memo[index];
	if (index === targetWord.length) return 1;
	let count = 0;
	for (const word of wordbank) {
		if (targetWord.indexOf(word) === index) {
			const num = countConstruct(targetWord, wordbank, index + word.length, memo);
			count += num;
			
		}
	}
	memo[index] = count;
	return count;
}