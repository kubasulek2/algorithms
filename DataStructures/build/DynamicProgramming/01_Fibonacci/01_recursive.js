"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibo = void 0;
function fibo(n) {
    if (n <= 0)
        throw new RangeError("Fibonacci number must be positive integer");
    else if (n <= 2)
        return 1;
    return fibo(n - 1) + fibo(n - 2);
}
exports.fibo = fibo;
//# sourceMappingURL=01_recursive.js.map