export function canConstruct (targetWord: string, wordbank: string[], index = 0, memo: any = {}): boolean
{
	if (index in memo) return memo[index];
	if (index === targetWord.length) return true;

	for (const word of wordbank) {
		if (targetWord.indexOf(word) === index) {
			const isSuccess = canConstruct(targetWord, wordbank, index + word.length, memo);
			if (isSuccess) {
				memo[index] = isSuccess;
				return isSuccess;
			}
		}
	}
	memo[index] = false;
	return memo[index];
}