"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaivePriorityQueue = void 0;
class NaivePriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
    get length() {
        return this.values.length;
    }
}
exports.NaivePriorityQueue = NaivePriorityQueue;
//# sourceMappingURL=PriorityQueque.js.map