type AdjacencyList = {
	[key: string]: string[];
};
export interface IGraph
{
	addVertex (v: string): void;
	addEdge (v1: string, v2: string, w?: number): void;
	removeVertex? (v: string): void;
	removeEdge? (v1: string, v2: string, w?: number): void;
	depthFirstRecursive? (v: string): string[];
	depthFirstIterative? (v: string): string[];
	breadthFirst? (v: string): string[]
}
/**
 * Undirected, unweighted Graph based on Adjacency List
 */
export class Graph implements IGraph
{
	private adjacencyList: AdjacencyList = {};
	private visitedVertcies: {[key: string]: true;} = {};
	private traverseResult: string[] = [];

	public addVertex (vertex: string): void
	{
		if (this.adjacencyList[vertex]) throw new Error('Vertex already in the graph');
		this.adjacencyList[vertex] = [];
	}

	public removeVertex (vertex: string): void
	{
		if (!this.adjacencyList[vertex]) throw new Error('Vertex not in the graph');
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop() as string;
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}

	public addEdge (v1: string, v2: string): void
	{
		if (v1 === v2) throw new Error('Vertex cannot connect to itself');
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) throw new Error('Vertex not in the graph');
		if (this.adjacencyList[v1].indexOf(v2) > -1 || this.adjacencyList[v1].indexOf(v2) > -1) throw new Error('Edge already in the graph');

		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	public removeEdge (v1: string, v2: string): void
	{
		if (v1 === v2) throw new Error('Vertex cannot connect to itself');
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) throw new Error('Vertex not in the graph');

		this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
		this.adjacencyList[v1] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
	}

	private traverseDFS (vertex: string): void
	{
		if (!this.adjacencyList[vertex] || !this.adjacencyList[vertex].length) return;
		this.visitedVertcies[vertex] = true;
		this.traverseResult.push(vertex);
		this.adjacencyList[vertex].forEach(v => this.visitedVertcies[v] ? null : this.traverseDFS(v));
	}

	public depthFirstRecursive (start: string): string[]
	{
		/* clean before start */
		this.traverseResult = [];
		this.visitedVertcies = {};

		/* recursively build result*/
		this.traverseDFS(start);

		/* return result */
		return [...this.traverseResult];
	}


	public depthFirstIterative (start: string): string[]
	{
		/* clean before start */
		this.traverseResult = [];
		this.visitedVertcies = {};

		const stack: string[] = [];

		if (!this.adjacencyList[start]) return [];

		stack.push(start);
		this.visitedVertcies[start] = true;

		while (stack.length) {
			const vertex = stack.pop() as string;
			this.traverseResult.push(vertex);
			this.visitedVertcies[vertex] = true;
			this.adjacencyList[vertex].forEach(v => !this.visitedVertcies[v] ? (this.visitedVertcies[v] = true, stack.push(v)) : null);
		}

		return [...this.traverseResult];
	}
	
	
	public breadthFirst(start: string): string[]
	{
		/* clean before start */
		this.traverseResult = [];
		this.visitedVertcies = {};
	
		const stack: string[] = [];
	
		if (!this.adjacencyList[start]) return [];
	
		stack.push(start);
		this.visitedVertcies[start] = true;
	
		while (stack.length) {
			const vertex = stack.shift() as string;
			this.traverseResult.push(vertex);
			this.visitedVertcies[vertex] = true;
			this.adjacencyList[vertex].forEach(v => !this.visitedVertcies[v] ? (this.visitedVertcies[v] = true, stack.push(v)) : null);
		}
	
		return [...this.traverseResult];

	}
}