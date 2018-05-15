/*
Graphs are represented commonly as an adjacency list or adjacency matrix.

An adjacency matrix is a 2-dimensional array of size VxV, where V is the number of vertices in a graph. Adjacency matrices for undirected graphs are always symmetric. An adjacency matrix is also used to represent weighted graphs.
Queries are fast, but an adjacency matrix takes up more edges. Additionally, adding an vertex takes O(V^2) time.

An adjacency list is an array of linked list. The size of the array is equal to the number of vertices. An entry array[i] represent the linked list of vertices adjacent to the ith vertex.
This representation can also be used to represent a weighted graph. The weights of edges can be stored in the nodes of the linked list.

*/

class Graph {
	constructor(v) {
		this.v = v;
		adjListArr = Array(v);
		for (let i = 0; i < v; i++) {
			adjListArr[i] = new LinkedList();
		}
	}
}

function addEdge (graph, src, dest) {
	graph.adjListArr[src].addFirst(dest);
	graph.adjListArr[dest].addFirst(src);
}
