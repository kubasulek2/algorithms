"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allConstruct = void 0;
function allConstruct(target, wordBank, memo = {}) {
    if (target in memo)
        return memo[target];
    if (!target.length)
        return [[]];
    const result = [];
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}
exports.allConstruct = allConstruct;
//# sourceMappingURL=index.js.map