/* Find Shortest Path to All Vertices */

/*

Explanation: We generate a shortest path tree with the given source as the root.
We maintain two sets - one set contains vertices included in shortest path tree
and the other set includes vertices not yet included in the shortest path tree.
At every step of the algorithm, we find a vertex which is in the other set and has
a minimum distance from the source.

Running Time: O(V^2)
It can be reduced using an adjacency list and a binary heap

Note: Dijkstra's algorithm doesn't work for graphs wiht negative weight
edges. For graphs with negative weight edges, Bellman-ford can be used.

*/

const V = 9;

function dijkstra(graph, src) {
	const dist = Array(V);
	const sptSet = Array(V);

	for (let i = 0; i < V; i++) {
		dist[i] = Number.MAX_SAFE_INTEGER;
		sptSet[i] = false;
	}

	dist[src] = 0;

	for (let count = 0; count < V-1; count++) {
		let u = minDistance(dist, sptSet);
		sptSet[u] = true;

		for (let v = 0; v < V; v++) {
			if (!sptSet[v] && graph[u][v] !== 0 && dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + graph[u][v] < dist[v]) {
				dist[v] = dist[u] + graph[u][v];
			}
		}
	}
	printSolution(dist, V);
}

function minDistance(dist, sptSet) {
	let min = Number.MAX_SAFE_INTEGER,
		minIndex = -1;

	for (let v = 0; v < V; v++) {
		if (sptSet[v] === false && dist[v] <= min) {
			min = dist[v];
			minIndex = v;
		}
	}
	return minIndex;
}

function printSolution(dist, n) {
	for(let i = 0; i < V; i++) {
		console.log(i + " tt " + dist[i]);
	}
}