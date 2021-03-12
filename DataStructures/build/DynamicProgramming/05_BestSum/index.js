"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bestSum = exports.bestSumTrick = void 0;
const _04_HowSum_1 = require("../04_HowSum");
function bestSumTrick(numbers, targetSum) {
    return _04_HowSum_1.howSum(numbers.sort((a, b) => b - a), targetSum);
}
exports.bestSumTrick = bestSumTrick;
function bestSum(numbers, targetSum, memo = {}) {
    if (memo[targetSum])
        return memo[targetSum];
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0)
        return null;
    let bestPath = null;
    for (const num of numbers) {
        const partial = bestSum(numbers, targetSum - num);
        if (partial !== null) {
            if (!bestPath || bestPath.length > partial.length + 1)
                bestPath = [...partial, num];
        }
    }
    memo[targetSum] = bestPath;
    return memo[targetSum];
}
exports.bestSum = bestSum;
//# sourceMappingURL=index.js.map