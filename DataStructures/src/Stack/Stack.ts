export interface StackNode<T> {
	value: T;
	next: StackNodeType<T>;
}

type StackNodeType<T> = StackNode<T> | null;

export class Stack<T, N extends StackNode<T>> {
	private size = 0;
	private first: StackNodeType<T> = null;
	constructor (private Node: new (value: T) => N) { }

	/**
	 * push on top of the stack, returns new stack size
	 */
	public push (value: T): number {
		const newNode = new this.Node(value);
		const oldFirst = this.first;
		this.first = newNode;
		if (!oldFirst) {
		} else {
			this.first.next = oldFirst;
		}
		return ++this.size;
	}

	/**
	* remove item from the top of the stack, returns removed value, or undefined if stack was empty
	*/
	public pop (): T | null {
		if (!this.first) return null;
		const nodeToRemove = this.first;
		this.first = this.first.next;
		this.size--;
		return nodeToRemove.value;

	}
}