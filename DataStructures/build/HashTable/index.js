"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        const PRIME_NUM = 43;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let val = key[i].codePointAt(0) - 96;
            total = (total * PRIME_NUM + val) % this.keyMap.length;
        }
        return total;
    }
    set(key, val) {
        var _a;
        const index = this._hash(key);
        (_a = this.keyMap[index]) !== null && _a !== void 0 ? _a : (this.keyMap[index] = []);
        this.keyMap[index].push([key, val]);
    }
    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (const tuple of this.keyMap[index]) {
                if (tuple[0] === key)
                    return tuple[1];
            }
        }
        return undefined;
    }
    keys() {
        let keys = [];
        for (const element of this.keyMap) {
            if (element) {
                for (const tuple of element) {
                    keys.push(tuple[0]);
                }
            }
        }
        return keys;
    }
    values() {
        let values = [];
        for (const element of this.keyMap) {
            if (element) {
                for (const tuple of element) {
                    values.push(tuple[1]);
                }
            }
        }
        return values;
    }
}
exports.HashTable = HashTable;
//# sourceMappingURL=index.js.map