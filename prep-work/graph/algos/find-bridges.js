/*

An edge in an undirected connected graph is a bridge if removing it disconnects the graph. For a disconnected undirected graph, definition is similar, a bridge is an edge removing which increases number of disconnected components.

Bridges represent vulnerabilities in a connected network and are useful for designing reliable networks.

A simple way to approach this problem is to remove each edge and check to see if it causes the graph to be disconnected. However, that woule take O(E * (V + E)) time.

Instead, we can do dfs traversal on our given graph. 
In a dfs tree, an edge uv (us is the parent of v in teh dfs tree) is a bridge if there does not exist any other alternative to reach u or an ancestor of u from the subtree rooted with v.

For an edge (u, v) to be a bridge is if low[v] > disc[u], where the value low[v] indicates the earliest visited reachable from subtree rooted with v.

The running time for this implementation is O(V + E).

*/

function bridge(V) {
	const visited = Array(V);
	visisted.fill(false);
	const disc = Array(V);
	const low = Array(V);
	const parent = Array(V)
	parent.fill(null);

	for (let i = 0; i < V; i++) {
		if(visited[i] === false) {
			bridgeUtil(i, visited, disc, low, parent);
		}
	}
}

function bridgeUtil(u, visited, disc, low, parent) {
	// count children in dfs tree	
	let children = 0;

	visited[u] = true;
	disc[u] = time++;
	low[u] = time++;

	while(adj[u].next !== null) {
		let v = adj[u].next;
		if (!visited[v]) {
			parent[v] = u;
			bridgeUtil(v, visited, disc, low, parent);
			low[u] = Math.min(low[u], low[v]);

			// if the lowest vertex reachable from a subtree
			// under v is below u in the dfs tree, then u-v is 
			// a bridge
			if (low[v] > disc[u]) {
				console.log(u + "  " + v);
			}
		} else if (v !== parent[u]) {
			low[u] = Math.min(low[u], disc[v]);
		}
	}
}


