"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canSumNotUniqueWithCount = exports.canSumUnique = void 0;
function canSumUnique(numbers, targetSum) {
    let result = false;
    let counter = 0;
    (function traverse(numbers, targetSum, currentSum = 0) {
        counter++;
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            const newSum = currentSum += number;
            if (newSum === targetSum)
                result = true;
            if (newSum >= targetSum)
                break;
            const nextNumbers = [...numbers].splice(numbers[i], 1);
            traverse(nextNumbers, targetSum, newSum);
        }
    }(numbers, targetSum, 0));
    console.log(counter);
    return result;
}
exports.canSumUnique = canSumUnique;
let counter = 0;
/**
 * w tej wersji [2], 6 daje true, bo można sumować wielokrotnie tę samą wartość
 */
function canSumNotUnique(numbers, targetSum, memo = {}) {
    counter++;
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;
    for (const num of numbers) {
        if (canSumNotUnique(numbers, targetSum - num, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}
function canSumNotUniqueWithCount(numbers, targetSum) {
    console.log(canSumNotUnique(numbers, targetSum));
    console.log(counter);
    counter = 0;
}
exports.canSumNotUniqueWithCount = canSumNotUniqueWithCount;
//# sourceMappingURL=index.js.map