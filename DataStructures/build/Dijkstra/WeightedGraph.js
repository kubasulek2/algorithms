"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedGraph = void 0;
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
}
exports.WeightedGraph = WeightedGraph;
//# sourceMappingURL=WeightedGraph.js.map