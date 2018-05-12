/*

We will use the Bellman Ford.

With Bellman Ford, we'll calculate the shortest distances which have at most one edge in the path. Then, we'll calculate the shortest paths with at most 2 edges in the path. After the ith iteration, teh shortest paths with at most i edges are calculate.
There can be a maximum of |V| - 1 edges in a ny simple path, that is why the outer loop runs |V| - 1 times. 
If there is a negative weight cycle, then one more iteration wuold give a shortest path. 

This implementation only works if the cycle is reachable from the source.
 
*/

function isNegCycleBellmanFord(graph, src) {
	let V = graph.V;
	let E = graph.E;
	const dist = Array(V);

	for (let i = 0; i < V; i++) {
		dist[i] = Number.MAX_SAFE_INTEGER;
	}
	dist[src] = 0;

	for (let i = 1; i <= V - 1; i++) {
		for (let j = 0; j < E; j++) {
			let u = graph.edge[j].src;
			let v = graph.edge[j].dest;
			let weight = graph.edge[j].weight;
			if (dist[u] !== Number.MAX_SAFE_INTEGER &&
				dist[u] + weight < dist[v]) {
				dist[v] = dist[u] + weight;
			}
		}
	}

	for (let i = 0; i < E; i++) {
		let u = graph.edge[i].src;
		let v = graph.edge[i].dest;
		let weight = graph.edge[i].weight;
		if (dist[u] !== Number.MAX_SAFE_INTEGER &&
			dist[u] + weight < dist[v]) {
			return true;
		}
	}
	return false;
}
