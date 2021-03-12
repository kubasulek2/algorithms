// import {NaivePriorityQueue} from './PriorityQueque';
import {PriorityQueque} from '../BinaryHeap/index';
import {IGraph} from '../Graphs';

interface Distances
{
	[key: string]: number;
}
interface Previous
{
	[key: string]: string | null;
}
interface GraphNode
{
	node: string,
	weight: number;
}

interface AdjacencyList
{
	[key: string]: GraphNode[];
}
export interface IWeightedGraph extends IGraph
{
	keys: string[];
	adjacencyList: AdjacencyList;
}

export class WeightedGraph implements IGraph
{
	constructor (public adjacencyList: AdjacencyList) {}

	addVertex (vertex: string): void
	{
		this.adjacencyList[vertex] = [];
	}
	addEdge (v1: string, v2: string, weight: number): void 
	{
		this.adjacencyList[v1].push({node: v2, weight});
		this.adjacencyList[v2].push({node: v1, weight});
	}
	get keys (): string[]
	{
		return Object.keys(this.adjacencyList);
	}

	private getPath (routes: Previous, stop: string): string[]
	{
		const result = [stop];
		let temp = stop;
		while (routes[temp]) {
			const nextRoute = routes[temp] as string;
			result.unshift(nextRoute);
			temp = nextRoute;
		}
		return result;
	}

	public dijkstra (start: string, end: string): [number, string[]] | undefined
	{

		/* Priority queue for getting node with shortest path first*/
		const queue = new PriorityQueque<string>();
		/* Stores current distances to all nodes, infinity if not known */
		const distances: Distances = {};
		/* Stores direction for shortest path to each node ie. A => C, C => E */
		const previous: Previous = {};
		/* place here nodes which all neighbours are examined. Closed nodes*/
		const visited: string[] = [];

		this.keys.forEach((key) =>
		{
			if (key === start) {
				distances[key] = 0;
				queue.enqueue(key, 0);
			}
			else {
				distances[key] = Infinity;
				queue.enqueue(key, Infinity);
			}

			previous[key] = null;
		});


		while (queue.length) {
			/* take out item with smallest priority (route in this case)*/
			const smallest = queue.dequeue() as string;
			if (smallest === end) {
				return [distances[smallest] as number, this.getPath(previous, end)];
			}
				if (this.adjacencyList[smallest]) {
				/* iterate through the neig */
				this.adjacencyList[smallest].forEach(node =>
				{
					/* distance is current smallest distance plus edge distance to current neighbor */
					const distance = node.weight + distances[smallest];
					/* if calculated distance is lower than current distance to that node, update distance and update path */
					if (distance < distances[node.node]) {
						distances[node.node] = distance;
						previous[node.node] = smallest;
						/* add new value to priority queque */
						queue.enqueue(node.node, distance);
					}
				});
				/* push to visited after each neighbor examined */
				visited.push(smallest);
			}
		}
		
		return undefined;
	}
}

