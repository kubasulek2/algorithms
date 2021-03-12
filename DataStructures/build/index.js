"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const perf_hooks_1 = require("perf_hooks");
class Solution {
    constructor() {
        this.count = 0;
    }
    compare(a, b) {
        this.count++;
        if (a[0] == b[0])
            return a[1] - b[1];
        return a[0] - b[0];
    }
    findInd(preSum, n, val) {
        let [l, h] = [0, n - 1];
        let res = -1, mid;
        while (l <= h) {
            mid = Math.floor((l + h) / 2);
            this.count++;
            if (preSum[mid][0] <= val) {
                res = mid;
                l = mid + 1;
            }
            else {
                h = mid - 1;
            }
        }
        return res;
    }
    longestNonNegativeSum(unsorted) {
        this.count = 0;
        const len = unsorted.length;
        let maxLen = 0;
        const preSum = [];
        let sum = 0;
        const minInd = Array(len).fill(0);
        this.count += len;
        for (let i = 0; i < len; i++) {
            this.count++;
            sum += unsorted[i];
            preSum.unshift([sum, i]);
        }
        preSum.sort(this.compare);
        minInd[0] = preSum[0][1];
        for (let i = 1; i < len; i++) {
            this.count++;
            minInd[i] = Math.min(minInd[i - 1], preSum[i][1]);
        }
        sum = 0;
        for (let i = 0; i < len; i++) {
            this.count++;
            sum += unsorted[i];
            if (sum >= 0)
                maxLen = i + 1;
            else {
                const ind = this.findInd(preSum, len, sum);
                if (ind !== -1 && minInd[ind] < i)
                    maxLen = Math.max(maxLen, i - minInd[ind]);
            }
        }
        console.log(this.count);
        return maxLen;
    }
}
exports.Solution = Solution;
function genTestArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 3) - 1);
}
function performanceTest(length) {
    const start1 = perf_hooks_1.performance.now();
    const arr = genTestArray(length);
    const s = new Solution();
    const end1 = perf_hooks_1.performance.now();
    console.log('creating', end1 - start1);
    const start = perf_hooks_1.performance.now();
    const result = s.longestNonNegativeSum(arr);
    const end = perf_hooks_1.performance.now();
    console.log(result);
    console.log('calculation', end - start);
}
performanceTest(3000000);
//# sourceMappingURL=index.js.map