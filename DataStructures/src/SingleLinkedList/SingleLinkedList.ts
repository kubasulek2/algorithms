import { ListNode } from './ListNode';
export class SingleLinkedList<T> {
	private head: ListNode<T> | null = null;
	private tail: ListNode<T> | null = null;
	public length = 0;

	/**
	 * @private returns underlying node at index, or undefined
	 */
	private getNode (index: number): ListNode<T> | undefined {
		if (index < 0 || index >= this.length) return undefined;
		let node: ListNode<T> = this.head!;
		for (let i = 0; i < index; i++) {
			node = node.next!;
		}
		return node;
	}
	/**
	 * add item to the end of the list, returns list
	 */
	public push (value: T): SingleLinkedList<T> {
		const node = new ListNode<T>(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail!.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	/**
	 * remove item from the end of the list, returns removed value or undefined if list was empty
	 */
	public pop (): T | undefined {
		if (!this.head) return undefined;
		let current = this.head, newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.head === this.tail) {
			this.tail = null;
			this.head = null;
		}

		return current.value;
	}

	/**
	 * add item to the begining of the list, returns list
	 */
	public unshift (value: T): SingleLinkedList<T> {
		const node = new ListNode<T>(value);
		let temp = this.head;
		this.head = node;
		if (!temp) {
			this.tail = node;
		} else {
			this.head.next = temp;
		}
		this.length++;
		return this;
	}

	/**
	* remove item from the begining of the list, returns removed value or undefined if list was empty
	*/
	public shift (): T | undefined {
		if (!this.head) return undefined;
		const node = this.head;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = node.next;
		}
		this.length--;
		return node.value;
	}

	/**
	 * returns value at index
	 */
	public get (index: number): T | undefined {
		const node = this.getNode(index);
		return node && node.value;
	}

	/**
	 * sets value at index returns value or undefined
	 */
	public set (index: number, value: T): ListNode<T> | undefined {
		if (index < 0 || index >= this.length) return undefined;
		let node: ListNode<T> = this.head!;
		for (let i = 0; i < index; i++) {
			node = node.next!;
		}
		node.value = value;
		return node;
	}

	/**
	 * inserts new node with value at index returns linkedlist
	 */
	public insert (index: number, value: T): boolean {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		const node = new ListNode(value);
		const prev = this.getNode(index - 1)!;
		node.next = prev.next;
		prev.next = node;
		this.length++;
		return true;
	}

	/**
	 * remove node at index, returns removed value or undefined
	 */
	public remove (index: number): T | undefined {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		const prev = this.getNode(index - 1)!;
		const removedValue = prev.next!.value;
		prev.next = prev.next!.next;
		this.length--;
		return removedValue;
	}

	public reverse (): SingleLinkedList<T> {
		let node = this.head, next, prev = null;
		this.head = this.tail;
		this.tail = node;

		for (let i = 0; i < this.length; i++) {
			next = node!.next;
			node!.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	public print () {
		const arr = [];
		let node = this.head;
		while (node) {
			arr.push(node.value);
			node = node.next;
		}
		console.log(arr);
	}
}
