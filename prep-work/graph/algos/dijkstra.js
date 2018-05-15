/*

Dijkstra's shortest path is similar to prim's algorithm for mists. Like Prim's mst, we general a shortest path tree (spt) with the given source as our root. We maintain two sets - one set contains vertices included in the shortest path tree. The other set includes vertices not yet included in the shortest path tree. At every step of the algorithm, we find a vertex which is in the other set (set of not yet included) and has minimum distance from source.

We will use a boolean array (sptSet) to represent the set of vertices included in the spt. If a value sptSet[v] is true, then vertex v is included in spt, otherwise not. Our array dist is used to store the shortest distance values of all vertices.

This implementation can be used for undirected or directed graphs.

Be aware that Dijkstra's algorithm doesn't work for graphs with negative weight eges. For graphs with negative weight edges, Bellman Ford can be used.

This implementation uses an adjacency matrix. 
The running time is O(V^2), however it can be reduced to O(E log V) with the help of a binary heap.

*/

function dijkstra(graph, src) {
	const dist = Array(V);
	dist.fill(Number.MAX_SAFE_INTEGER);
	dist[0] = 0;

	const sptSet = Array(V);
	sptSet.fill(false);

	for (let count = 0; count < V-1; count++) {
		// pick the min distance vertex from the set not yet processed
		let u = minDistance(dist, sptSet);
		sptSet[u] = true;
	}
	
	// update dist value of adjacent vertices
	for (let v = 0; v < V; v++) {
		if (!sptSet[v] && graph[u][v] !== 0 && dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + graph[u][v] < dist[v]) {
				dist[v] = dist[u] + graph[u][v];
		}
	}

	printSolution(dist, V);
}

function minDistance(dist, sptSet) {
	let min = Number.MAX_SAFE_INTEGER;
	let minIndex = -1;

	for (let v = 0; v < V; v++) {
		if (sptSet[v] === false &&
			dist[v] <= min) {
			min = dist[v];
			minIndex = v;
		}
	}

	return minIndex;
}

function printSolution(dist, n) {
	for (let i = 0; i < V; i++) {
		console.log(i + " " + dist[i]);
	}
}
