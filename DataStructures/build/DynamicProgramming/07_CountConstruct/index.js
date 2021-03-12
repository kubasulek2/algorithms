"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countConstruct = void 0;
function countConstruct(targetWord, wordbank, index = 0, memo = {}) {
    if (index in memo)
        return memo[index];
    if (index === targetWord.length)
        return 1;
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
exports.countConstruct = countConstruct;
//# sourceMappingURL=index.js.map