"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLinkedList = void 0;
const ListNode_1 = require("./ListNode");
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * @private returns underlying node at index, or undefined
     */
    getNode(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        const half = (this.length / 2) > index ? 'first' : 'second';
        let currentNode = half === 'first' ? this.head : this.tail;
        switch (half) {
            case 'first':
                for (let i = 0; i < index; i++) {
                    currentNode = currentNode.next;
                }
                break;
            default:
                for (let i = this.length - 1; i > index; i--) {
                    currentNode = currentNode.prev;
                }
                break;
        }
        return currentNode;
    }
    /**
     * add item to the end of the list, returns list
     */
    push(value) {
        const newNode = new ListNode_1.ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    /**
     * remove item from the end of the list, returns removed value or undefined if list was empty
     */
    pop() {
        if (this.length === 0)
            return undefined;
        let nodeToRemove = this.tail;
        if (nodeToRemove.prev) {
            nodeToRemove.prev.next = null;
        }
        this.tail = nodeToRemove.prev;
        this.tail || (this.head = this.tail);
        nodeToRemove.prev = null;
        this.length--;
        return nodeToRemove.value;
    }
    /**
     * add item to the begining of the list, returns list
     */
    unshift(value) {
        const newNode = new ListNode_1.ListNode(value);
        const oldHead = this.head;
        this.head = newNode;
        if (!oldHead) {
            this.tail = newNode;
        }
        else {
            this.head.next = oldHead;
            oldHead.prev = newNode;
        }
        this.length++;
        return this;
    }
    /**
    * remove item from the begining of the list, returns removed value or undefined if list was empty
    */
    shift() {
        if (!this.head)
            return undefined;
        const nodeToRemove = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = nodeToRemove.next;
            this.head.prev = null;
            nodeToRemove.next = null;
        }
        this.length--;
        return nodeToRemove.value;
    }
    /**
     * returns value at index
     */
    get(index) {
        const node = this.getNode(index);
        return node && node.value;
    }
    /**
     * sets value at index returns value or undefined
     */
    set(index, value) {
        const node = this.getNode(index);
        if (!node)
            return undefined;
        node.value = value;
        return value;
    }
    /**
     * inserts new node with value at index returns linkedlist
     */
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length)
            return !!this.push(value);
        if (index === 0)
            return !!this.unshift(value);
        const newNode = new ListNode_1.ListNode(value);
        const beforeNode = this.getNode(index - 1);
        const afterNode = beforeNode.next;
        newNode.next = afterNode, afterNode.prev = newNode;
        newNode.prev = beforeNode, beforeNode.next = newNode;
        this.length++;
        return true;
    }
    /**
     * remove node at index, returns removed value or undefined
     */
    remove(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        if (index === this.length - 1)
            return this.pop();
        if (index === 0)
            return this.shift();
        const beforeNode = this.getNode(index - 1);
        const removedNode = beforeNode.next;
        const afterNode = removedNode.next;
        removedNode.prev = null, removedNode.next = null;
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        this.length--;
        return removedNode.value;
    }
    reverse() {
        let currentNode = this.tail, prev = null, next;
        this.tail = this.head;
        this.head = currentNode;
        for (let i = 0; i < this.length; i++) {
            next = currentNode.prev;
            currentNode.prev = prev, currentNode.next = next;
            prev = currentNode;
            currentNode = next;
        }
        return this;
    }
    // [1,2,3,4]
    /*           c -> 3, p -> null, next -> 2
        [1] [2] [3]
    */
    print() {
        const arr = [];
        let node = this.head;
        while (node) {
            arr.push(node.value);
            node = node.next;
        }
        console.log(arr);
    }
}
exports.DoubleLinkedList = DoubleLinkedList;
//# sourceMappingURL=DoubleLinkedList.js.map