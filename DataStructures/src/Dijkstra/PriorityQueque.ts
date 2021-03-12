interface IPriorityQueue<T>
{
	enqueue (value: string, priority: number): void,
	dequeue (): T | undefined,
	sort (): void;
	length: number
}

interface QuequeNode
{
	value: string,
	priority: number;
}
export class NaivePriorityQueue implements IPriorityQueue<QuequeNode>
{
	private values: QuequeNode[] = [];

	enqueue (value: string, priority: number): void
	{
		this.values.push({value, priority});
		this.sort();
	}
	dequeue (): QuequeNode | undefined
	{
		return this.values.shift();
	}
	sort (): void
	{
		this.values.sort((a, b) => a.priority - b.priority);
	}
	get length(): number 
	{
		return this.values.length;
	}
}