"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canConstruct = void 0;
function canConstruct(targetWord, wordbank, index = 0, memo = {}) {
    if (index in memo)
        return memo[index];
    if (index === targetWord.length)
        return true;
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
exports.canConstruct = canConstruct;
//# sourceMappingURL=index.js.map