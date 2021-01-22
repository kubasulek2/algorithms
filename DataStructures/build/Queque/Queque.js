"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queque = exports.QuequeNode = void 0;
class QuequeNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.QuequeNode = QuequeNode;
class Queque {
    constructor() {
        this._size = 0;
        this.first = null;
        this.last = null;
    }
    enqueque(value) {
        const newNode = new QuequeNode(value);
        if (!this.first) {
            this.first = this.last = newNode;
        }
        else {
            let temp = this.last;
            this.last = newNode;
            temp.next = newNode;
        }
        return ++this._size;
    }
    dequeque() {
        if (!this._size)
            return null;
        if (this.first === this.last) {
            this.last = null;
        }
        const temp = this.first;
        this.first = temp.next;
        this._size--;
        return temp.value;
    }
    get size() { return this._size; }
}
exports.Queque = Queque;
//# sourceMappingURL=Queque.js.map