export function howSum (numbers: number[], targetSum: number, memo: any = {}): number[] | null
{
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) {
		return [];
	}
	if (targetSum < 0) return null;
	for (const num of numbers) {
		const partial = howSum(numbers, targetSum - num);
		if (partial !== null) {
			memo[targetSum] = [...partial, num];
			return memo[targetSum];
		}
	}
	memo[targetSum] = null;
	return null;
}

export function bestSum (numbers: number[], targetSum: number): number[] | null
{
	return howSum(numbers.sort((a, b) => b - a), targetSum);
} 