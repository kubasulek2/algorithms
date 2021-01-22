export class QuequeNode<T> {
	public next: QuequeNode<T> | null = null;
	constructor (public value: T) { }
}
type QuequeItem<T> = QuequeNode<T> | null;

export class Queque<T> {
	private _size = 0;
	private first: QuequeItem<T> = null;
	private last: QuequeItem<T> = null;

	public enqueque (value: T): number {
		const newNode = new QuequeNode(value);
		if (!this.first) {
			this.first = this.last = newNode;
		} else {
			let temp = this.last!;
			this.last = newNode;
			temp.next = newNode;
		}

		return ++this._size;
	}
	public dequeque (): T | null {
		if (!this._size) return null;
		if (this.first === this.last) {
			this.last = null;
		}
		const temp = this.first!;
		this.first = temp.next;
		this._size--;

		return temp.value;
	}

	get size () { return this._size; }
}
