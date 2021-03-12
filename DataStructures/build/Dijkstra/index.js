"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedGraph = void 0;
// import {NaivePriorityQueue} from './PriorityQueque';
const index_1 = require("../BinaryHeap/index");
class WeightedGraph {
    constructor(adjacencyList) {
        this.adjacencyList = adjacencyList;
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }
    get keys() {
        return Object.keys(this.adjacencyList);
    }
    getPath(routes, stop) {
        const result = [stop];
        let temp = stop;
        while (routes[temp]) {
            const nextRoute = routes[temp];
            result.unshift(nextRoute);
            temp = nextRoute;
        }
        return result;
    }
    dijkstra(start, end) {
        /* Priority queue for getting node with shortest path first*/
        const queue = new index_1.PriorityQueque();
        /* Stores current distances to all nodes, infinity if not known */
        const distances = {};
        /* Stores direction for shortest path to each node ie. A => C, C => E */
        const previous = {};
        /* place here nodes which all neighbours are examined. Closed nodes*/
        const visited = [];
        this.keys.forEach((key) => {
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
            const smallest = queue.dequeue();
            if (smallest === end) {
                return [distances[smallest], this.getPath(previous, end)];
            }
            if (this.adjacencyList[smallest]) {
                /* iterate through the neig */
                this.adjacencyList[smallest].forEach(node => {
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
exports.WeightedGraph = WeightedGraph;
//# sourceMappingURL=index.js.map