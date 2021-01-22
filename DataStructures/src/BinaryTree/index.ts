
export class BSTNode {
	public left: BSTNode | null = null;
	public right: BSTNode | null = null;
	constructor (public value: number) { }

}

export class BinarySearchTree {
	public root: BSTNode | null = null;
	private traverse (nodeToInsert: BSTNode, currentNode: BSTNode): void {
		if (nodeToInsert.value === currentNode.value) return;
		else if (nodeToInsert.value > currentNode.value) {
			if (!currentNode.right) { currentNode.right = nodeToInsert; return; }
			return this.traverse(nodeToInsert, currentNode.right);
		} else {
			if (!currentNode.left) { currentNode.left = nodeToInsert; return; }
			return this.traverse(nodeToInsert, currentNode.left);
		}
	};

	public insert (value: number): void {
		const node = new BSTNode(value);
		let current = this.root;
		if (!current) {
			this.root = node;
		} else {
			while (true) {
				if (value === current.value) return;
				else if (value > current.value) {
					if (current.right) current = current.right;
					else { current.right = node; return; }
				} else {
					if (current.left) current = current.left;
					else { current.left = node; return; }
				}
			}
		}


	}
	public insertRec (value: number): void {
		const node = new BSTNode(value);
		if (!this.root) this.root = node;
		else this.traverse(node, this.root);
	}

	public find (value: number): false | BSTNode {
		let current = this.root;
		if (!current) {
			return false;
		} else {
			while (current) {
				if (value === current.value) return current;
				else if (value < current.value) current = current.left;
				else current = current.right;
			}
			return false;
		}
	}
}

export class TraverseTree {
	constructor (public tree: BinarySearchTree) { }
	public bfs (): number[] {
		const result: number[] = [];
		if (!this.tree.root) {
			return result;
		}
		let queque: BSTNode[] = [this.tree.root];

		while (queque.length) {
			let temp: BSTNode[] = [];
			queque.forEach(n => {
				result.push(n.value);
				if (n.left) temp.push(n.left);
				if (n.right) temp.push(n.right);
			});
			queque = temp;
		}
		return result;
	}

	private preorderTraverse (current: BSTNode, arr: number[]) {
		arr.push(current.value);
		if (current.left) this.preorderTraverse(current.left, arr);
		if (current.right) this.preorderTraverse(current.right, arr);
	}
	
	private postorderTraverse (current: BSTNode, arr: number[]) {
		if (current.left) this.postorderTraverse(current.left, arr);
		if (current.right) this.postorderTraverse(current.right, arr);
		arr.push(current.value);
	}

	private inorderTraverse (current: BSTNode, arr: number[]) {
		if (current.left) this.inorderTraverse(current.left, arr);
		arr.push(current.value);
		if (current.right) this.inorderTraverse(current.right, arr);
	}

	public dfsPreOrder (): number[] {
		const root = this.tree.root, result: number[] = [];
		if (root) this.preorderTraverse(root, result);
		return result;
	}

	public dfsPostOrder (): number[] {
		const root = this.tree.root, result: number[] = [];
		if (root) this.postorderTraverse(root, result);
		return result;
	}

	public dfsInOrder (): number[] {
		const root = this.tree.root, result: number[] = [];
		if (root) this.inorderTraverse(root, result);
		return result;
	}

}
