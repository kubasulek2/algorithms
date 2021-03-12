import {howSum} from "../04_HowSum";

export function bestSumTrick (numbers: number[], targetSum: number): number[] | null
{
	return howSum(numbers.sort((a, b) => b - a), targetSum);
} 
export function bestSum (numbers: number[], targetSum: number): number[] | null {
	
}