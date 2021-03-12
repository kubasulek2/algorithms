"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibo = void 0;
exports.fibo = (() => {
    const f = function fibo(n) {
        if (n <= 0)
            throw new RangeError("Fibonacci number must be positive integer");
        if (n in f.memo)
            return f.memo[n];
        f.memo[n] = fibo(n - 1) + fibo(n - 2);
        return f.memo[n];
    };
    f.memo = { 1: 1, 2: 2 };
    return f;
})();
//# sourceMappingURL=02_recursive_memo.js.map