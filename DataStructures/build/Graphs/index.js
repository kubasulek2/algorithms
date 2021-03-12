"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
/**
 * Undirected, unweighted Graph based on Adjacency List
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
        this.visitedVertcies = {};
        this.traverseResult = [];
    }
    addVertex(vertex) {
        if (this.adjacencyList[vertex])
            throw new Error('Vertex already in the graph');
        this.adjacencyList[vertex] = [];
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex])
            throw new Error('Vertex not in the graph');
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    addEdge(v1, v2) {
        if (v1 === v2)
            throw new Error('Vertex cannot connect to itself');
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
            throw new Error('Vertex not in the graph');
        if (this.adjacencyList[v1].indexOf(v2) > -1 || this.adjacencyList[v1].indexOf(v2) > -1)
            throw new Error('Edge already in the graph');
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        if (v1 === v2)
            throw new Error('Vertex cannot connect to itself');
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
            throw new Error('Vertex not in the graph');
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
        this.adjacencyList[v1] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
    }
    traverseDFS(vertex) {
        if (!this.adjacencyList[vertex] || !this.adjacencyList[vertex].length)
            return;
        this.visitedVertcies[vertex] = true;
        this.traverseResult.push(vertex);
        this.adjacencyList[vertex].forEach(v => this.visitedVertcies[v] ? null : this.traverseDFS(v));
    }
    depthFirstRecursive(start) {
        /* clean before start */
        this.traverseResult = [];
        this.visitedVertcies = {};
        /* recursively build result*/
        this.traverseDFS(start);
        /* return result */
        return [...this.traverseResult];
    }
    depthFirstIterative(start) {
        /* clean before start */
        this.traverseResult = [];
        this.visitedVertcies = {};
        const stack = [];
        if (!this.adjacencyList[start])
            return [];
        stack.push(start);
        this.visitedVertcies[start] = true;
        while (stack.length) {
            const vertex = stack.pop();
            this.traverseResult.push(vertex);
            this.visitedVertcies[vertex] = true;
            this.adjacencyList[vertex].forEach(v => !this.visitedVertcies[v] ? (this.visitedVertcies[v] = true, stack.push(v)) : null);
        }
        return [...this.traverseResult];
    }
    breadthFirst(start) {
        /* clean before start */
        this.traverseResult = [];
        this.visitedVertcies = {};
        const stack = [];
        if (!this.adjacencyList[start])
            return [];
        stack.push(start);
        this.visitedVertcies[start] = true;
        while (stack.length) {
            const vertex = stack.shift();
            this.traverseResult.push(vertex);
            this.visitedVertcies[vertex] = true;
            this.adjacencyList[vertex].forEach(v => !this.visitedVertcies[v] ? (this.visitedVertcies[v] = true, stack.push(v)) : null);
        }
        return [...this.traverseResult];
    }
}
exports.Graph = Graph;
//# sourceMappingURL=index.js.map