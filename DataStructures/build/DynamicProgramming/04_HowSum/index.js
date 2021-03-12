"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestSum = exports.howSum = void 0;
function howSum(numbers, targetSum, memo = {}) {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0)
        return null;
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
exports.howSum = howSum;
function bestSum(numbers, targetSum) {
    return howSum(numbers.sort((a, b) => b - a), targetSum);
}
exports.bestSum = bestSum;
//# sourceMappingURL=index.js.map