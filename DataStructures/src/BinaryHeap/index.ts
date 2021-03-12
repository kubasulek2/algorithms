export class MaxBinaryHeap {
	private nodes: number[] = [];

	private sinkDown () {
		const value = this.nodes[0];
		let index = 0;
		while ((index * 2 + 1) <= this.nodes.length - 1) {
			const greaterIdx = index * 2 + (this.nodes[index * 2 + 1] >= (this.nodes[index * 2 + 2] || -Infinity) ? 1 : 2);
			if (this.nodes[greaterIdx] < value) break;
			this.nodes[index] = this.nodes[greaterIdx];
			this.nodes[greaterIdx] = value;
			index = greaterIdx;
		}
	}
	public insert (value: number): MaxBinaryHeap {
		this.nodes.push(value);
		let index = this.nodes.length - 1;
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.nodes[index] <= this.nodes[parentIndex]) break;
			this.nodes[index] = this.nodes[parentIndex];
			this.nodes[parentIndex] = value;
			index = parentIndex;

		}
		return this;
	}

	public extractMax (): number | undefined {
		if (!this.nodes.length) return undefined;
		const value = this.nodes[0];
		this.nodes[0] = this.nodes[this.nodes.length - 1];
		this.nodes.length = this.nodes.length - 1;
		this.sinkDown();
		return value;
	}
	public print (): void {
		console.log(this.nodes);
	}
}

class PriorityNode<T> {
	constructor (public value: T, public priority: number) { }
}

export class PriorityQueque<T> {
	private nodes: PriorityNode<T>[] = [];

	private sinkDown () {
		const node = this.nodes[0];
		let index = 0;
		while ((index * 2 + 1) <= this.nodes.length - 1) {
			const greaterIdx = index * 2 + (this.nodes[index * 2 + 1].priority <= (this.nodes[index * 2 + 2]?.priority || +Infinity) ? 1 : 2);
			if (this.nodes[greaterIdx].priority > node.priority) break;
			this.nodes[index] = this.nodes[greaterIdx];
			this.nodes[greaterIdx] = node;
			index = greaterIdx;
		}
	}
	
	public enqueue (value: T, priority: number): PriorityQueque<T> {
		const node = new PriorityNode<T>(value, priority);
		this.nodes.push(node);
		let index = this.nodes.length - 1;
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.nodes[index].priority >= this.nodes[parentIndex].priority) break;
			this.nodes[index] = this.nodes[parentIndex];
			this.nodes[parentIndex] = node;;
			index = parentIndex;

		}
		return this;
	}

	public dequeue (): T | undefined {
		if (!this.nodes.length) return undefined;
		const value = this.nodes[0].value;
		this.nodes[0] = this.nodes[this.nodes.length - 1];
		this.nodes.length = this.nodes.length - 1;
		this.sinkDown();
		return value;
	}
	public print (): void {
		console.log(this.nodes);
	}
	public get length (): number 
	{
		return this.nodes.length;
	}
}