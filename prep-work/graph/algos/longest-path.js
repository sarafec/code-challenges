/*

In general, the longest path problem doesn't have optimal substructure and is NP-Hard. However, for a dag it can be solved in linear time. To do this, we will use topological sort.

We initialize the distance to all vertices as negative infinity and the distance to the source as 0. Then we find a topological sorting of the graph. 
The topological sorting of a graph represents a linear ordering of the graph.

Once we have topological order (or linear representation), we one by one, process all vertices in topological order. For every vertex being processed, we update distances of its adjacent using distance of cu
current vertex.

The running time for this implementation is O(V + E). 
After finding the topological order, the algorithm processes all vertices and for every vertex, it runs a loop for all adjacent vertices. Total adjacent vertices in the graph is O(E). And the inner loop runs O(V + E) times.

*/

function longestPath(currVertex) {
	const stack = new Stack();
	const dist = Array(V);
	const visited = Array(V);
	visited.fill(false);

	for (let i = 0; i < V; i++) {
		if (visited[i] === false) {
			topologicalSortUtil(i, visited, stack);
		}
	}

	for (let i = 0; i < V; i++) {
		dist[i] = Number.MAX_SAFE_INTEGER;
	}
	dist[currVertex] = 0;

	while (!stack.isEmpty()) {
		let u = stack.pop();
		if (dist[u] !== Number.MAX_SAFE_INTEGER) {
			while(dist[u].next !== null) {
				// this part is most likely wrong
				// does es6 iterators emulate the behavior in c++
				if (dist[u].next.getV() < dist[u] + dist[u].getWeight()) {
					dist[dist[u].getV()] = dist[u] + dist[u].getWeight();
				}
				dist[u] = dist[u].next;
			}
		}
	}
	for (let i = 0; i < V; i++) {
		dist[i] === Number.MAX_SAFE_INTEGER ? console.log(infinity) : console.log(dist[i]);
	}
}
