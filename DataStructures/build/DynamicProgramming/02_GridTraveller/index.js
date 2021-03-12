"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizedTravelAndCount = exports.travelAndCount = exports.optimizedGridTraveller = exports.gridTraveller = void 0;
/**
 * keys shape like follows: '2:3', '4:6'
 */
const memo = {};
const memo2 = {};
let counter = 0;
let counter2 = 0;
function gridTraveller(n, m) {
    counter++;
    if (memo[`${n}:${m}`])
        return memo[`${n}:${m}`];
    if (n <= 0 || m <= 0)
        return 0;
    if (n === 1 || m === 1) {
        memo[`${n}:${m}`] = 1;
        memo[`${m}:${n}`] = 1;
        return 1;
    }
    memo[`${n}:${m}`] = memo[`${m}:${n}`] = gridTraveller(n - 1, m) + gridTraveller(n, m - 1);
    return memo[`${n}:${m}`];
}
exports.gridTraveller = gridTraveller;
function optimizedGridTraveller(n, m) {
    counter2++;
    const key = `${n}:${m}`;
    const reverseKey = `${m}:${n}`;
    if (memo2[key] || memo2[reverseKey])
        return memo2[key];
    if (n === 1 || m === 1) {
        memo2[key] = 1;
        return 1;
    }
    memo2[key] = gridTraveller(n - 1, m) + gridTraveller(n, m - 1);
    return memo2[key];
}
exports.optimizedGridTraveller = optimizedGridTraveller;
function roughSizeOfObject(object) {
    const objectList = [];
    const stack = [object];
    let bytes = 0;
    while (stack.length) {
        const value = stack.pop();
        if (typeof value === 'boolean') {
            bytes += 4;
        }
        else if (typeof value === 'string') {
            bytes += value.length * 2;
        }
        else if (typeof value === 'number') {
            bytes += 8;
        }
        else if (typeof value === 'object'
            && objectList.indexOf(value) === -1) {
            objectList.push(value);
            for (const i in value) {
                stack.push(value[i]);
            }
        }
    }
    return bytes;
}
function travelAndCount(m, n) {
    console.log('grid size:', m, 'times', n);
    console.log('possible solutions:', gridTraveller(m, n));
    console.log('how many calls:', counter);
    counter = 0;
    console.log('memo size:', roughSizeOfObject(memo) / 1024, 'MB roughly');
}
exports.travelAndCount = travelAndCount;
function optimizedTravelAndCount(m, n) {
    console.log('grid size:', m, 'times', n);
    console.log('possible solutions:', optimizedGridTraveller(m, n));
    console.log('how many calls:', counter2);
    counter2 = 0;
    // if(m===100) console.log(memo2);
    console.log('memo size:', roughSizeOfObject(memo2) / 1024, 'MB roughly');
}
exports.optimizedTravelAndCount = optimizedTravelAndCount;
//# sourceMappingURL=index.js.map