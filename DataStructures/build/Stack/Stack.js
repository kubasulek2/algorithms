"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(Node) {
        this.Node = Node;
        this.size = 0;
        this.first = null;
    }
    /**
     * push on top of the stack, returns new stack size
     */
    push(value) {
        const newNode = new this.Node(value);
        const oldFirst = this.first;
        this.first = newNode;
        if (!oldFirst) {
        }
        else {
            this.first.next = oldFirst;
        }
        return ++this.size;
    }
    /**
    * remove item from the top of the stack, returns removed value, or undefined if stack was empty
    */
    pop() {
        if (!this.first)
            return null;
        const nodeToRemove = this.first;
        this.first = this.first.next;
        this.size--;
        return nodeToRemove.value;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map