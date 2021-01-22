"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const areArraysAnagrams_1 = require("./areArraysAnagrams");
function generateArrays(len) {
    return [0, 1].map(_ => Array.from({ length: len }, () => Math.floor(Math.random() * len / 3)));
}
const arrays_1 = generateArrays(1000);
const arrays_2 = generateArrays(10000);
const arrays_3 = generateArrays(100000);
const arrays_4 = generateArrays(1000000);
const performanceMeasure = (name, args, cb) => {
    const start = perf_hooks_1.performance.now();
    cb(...args);
    const stop = perf_hooks_1.performance.now();
    const time = stop - start;
    console.log(`Time for ${name}: ${time}ms`);
};
performanceMeasure('1000s', arrays_1, areArraysAnagrams_1.areArraysAnagrams);
performanceMeasure('10000s', arrays_2, areArraysAnagrams_1.areArraysAnagrams);
performanceMeasure('100000s', arrays_3, areArraysAnagrams_1.areArraysAnagrams);
performanceMeasure('1000000s', arrays_4, areArraysAnagrams_1.areArraysAnagrams);
//# sourceMappingURL=index.js.map