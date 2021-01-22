"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraverseTree = exports.BinarySearchTree = exports.BSTNode = void 0;
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.BSTNode = BSTNode;
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    traverse(nodeToInsert, currentNode) {
        if (nodeToInsert.value === currentNode.value)
            return;
        else if (nodeToInsert.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = nodeToInsert;
                return;
            }
            return this.traverse(nodeToInsert, currentNode.right);
        }
        else {
            if (!currentNode.left) {
                currentNode.left = nodeToInsert;
                return;
            }
            return this.traverse(nodeToInsert, currentNode.left);
        }
    }
    ;
    insert(value) {
        const node = new BSTNode(value);
        let current = this.root;
        if (!current) {
            this.root = node;
        }
        else {
            while (true) {
                if (value === current.value)
                    return;
                else if (value > current.value) {
                    if (current.right)
                        current = current.right;
                    else {
                        current.right = node;
                        return;
                    }
                }
                else {
                    if (current.left)
                        current = current.left;
                    else {
                        current.left = node;
                        return;
                    }
                }
            }
        }
    }
    insertRec(value) {
        const node = new BSTNode(value);
        if (!this.root)
            this.root = node;
        else
            this.traverse(node, this.root);
    }
    find(value) {
        let current = this.root;
        if (!current) {
            return false;
        }
        else {
            while (current) {
                if (value === current.value)
                    return current;
                else if (value < current.value)
                    current = current.left;
                else
                    current = current.right;
            }
            return false;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
class TraverseTree {
    constructor(tree) {
        this.tree = tree;
    }
    bfs() {
        const result = [];
        if (!this.tree.root) {
            return result;
        }
        let queque = [this.tree.root];
        while (queque.length) {
            let temp = [];
            queque.forEach(n => {
                result.push(n.value);
                if (n.left)
                    temp.push(n.left);
                if (n.right)
                    temp.push(n.right);
            });
            queque = temp;
        }
        return result;
    }
    preorderTraverse(current, arr) {
        arr.push(current.value);
        if (current.left)
            this.preorderTraverse(current.left, arr);
        if (current.right)
            this.preorderTraverse(current.right, arr);
    }
    postorderTraverse(current, arr) {
        if (current.left)
            this.postorderTraverse(current.left, arr);
        if (current.right)
            this.postorderTraverse(current.right, arr);
        arr.push(current.value);
    }
    inorderTraverse(current, arr) {
        if (current.left)
            this.inorderTraverse(current.left, arr);
        arr.push(current.value);
        if (current.right)
            this.inorderTraverse(current.right, arr);
    }
    dfsPreOrder() {
        const root = this.tree.root, result = [];
        if (root)
            this.preorderTraverse(root, result);
        return result;
    }
    dfsPostOrder() {
        const root = this.tree.root, result = [];
        if (root)
            this.postorderTraverse(root, result);
        return result;
    }
    dfsInOrder() {
        const root = this.tree.root, result = [];
        if (root)
            this.inorderTraverse(root, result);
        return result;
    }
}
exports.TraverseTree = TraverseTree;
//# sourceMappingURL=index.js.map