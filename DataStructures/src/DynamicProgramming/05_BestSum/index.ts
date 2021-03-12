import {howSum} from "../04_HowSum";

export function bestSumTrick (numbers: number[], targetSum: number): number[] | null
{
	return howSum(numbers.sort((a, b) => b - a), targetSum);
} 
export function bestSum (numbers: number[], targetSum: number, memo:any={}): number[] | null
{
	if(memo[targetSum]) return memo[targetSum];
	if (targetSum === 0) {
		return [];
	}
	if (targetSum < 0) return null;
	let bestPath: number[] | null = null; 
	for (const num of numbers) {
		const partial = bestSum(numbers, targetSum - num);
		if (partial !== null) {
			if (!bestPath || bestPath.length > partial.length + 1) bestPath = [...partial, num];
		}
	}
	memo[targetSum] = bestPath;
	return memo[targetSum];
}