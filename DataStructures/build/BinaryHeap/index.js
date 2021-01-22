"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueque = exports.MaxBinaryHeap = void 0;
class MaxBinaryHeap {
    constructor() {
        this.nodes = [];
    }
    sinkDown() {
        const value = this.nodes[0];
        let index = 0;
        while ((index * 2 + 1) <= this.nodes.length - 1) {
            const greaterIdx = index * 2 + (this.nodes[index * 2 + 1] >= (this.nodes[index * 2 + 2] || -Infinity) ? 1 : 2);
            if (this.nodes[greaterIdx] < value)
                break;
            this.nodes[index] = this.nodes[greaterIdx];
            this.nodes[greaterIdx] = value;
            index = greaterIdx;
        }
    }
    insert(value) {
        this.nodes.push(value);
        let index = this.nodes.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.nodes[index] <= this.nodes[parentIndex])
                break;
            this.nodes[index] = this.nodes[parentIndex];
            this.nodes[parentIndex] = value;
            index = parentIndex;
        }
        return this;
    }
    extractMax() {
        if (!this.nodes.length)
            return undefined;
        const value = this.nodes[0];
        this.nodes[0] = this.nodes[this.nodes.length - 1];
        this.nodes.length = this.nodes.length - 1;
        this.sinkDown();
        return value;
    }
    print() {
        console.log(this.nodes);
    }
}
exports.MaxBinaryHeap = MaxBinaryHeap;
class PriorityNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueque {
    constructor() {
        this.nodes = [];
    }
    sinkDown() {
        var _a;
        const node = this.nodes[0];
        let index = 0;
        while ((index * 2 + 1) <= this.nodes.length - 1) {
            const greaterIdx = index * 2 + (this.nodes[index * 2 + 1].priority <= (((_a = this.nodes[index * 2 + 2]) === null || _a === void 0 ? void 0 : _a.priority) || +Infinity) ? 1 : 2);
            if (this.nodes[greaterIdx].priority > node.priority)
                break;
            this.nodes[index] = this.nodes[greaterIdx];
            this.nodes[greaterIdx] = node;
            index = greaterIdx;
        }
    }
    insert(value, priority) {
        const node = new PriorityNode(value, priority);
        this.nodes.push(node);
        let index = this.nodes.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.nodes[index].priority >= this.nodes[parentIndex].priority)
                break;
            this.nodes[index] = this.nodes[parentIndex];
            this.nodes[parentIndex] = node;
            ;
            index = parentIndex;
        }
        return this;
    }
    extractMin() {
        if (!this.nodes.length)
            return undefined;
        const value = this.nodes[0].value;
        this.nodes[0] = this.nodes[this.nodes.length - 1];
        this.nodes.length = this.nodes.length - 1;
        this.sinkDown();
        return value;
    }
    print() {
        console.log(this.nodes);
    }
}
exports.PriorityQueque = PriorityQueque;
//# sourceMappingURL=index.js.map