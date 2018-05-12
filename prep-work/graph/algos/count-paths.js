/*

Use backtracking to count all paths in a graph.
We will take a path and start walking down it. If it leads us to the destination vertex then we will count that path and backtrack to take another path. If the path doesn't lead us to the destination vertex, we discard the path.

*/

function countPaths(s, d) {
	const visited = Array(V);
	visited.fill(false);
	
	let pathCount = 0;
	pathCount = countPathsUtil(s, d, visited, pathCount);
	return pathCount;
}

function countPathsUtil(u, d, visited, pathCount) {
	visited[u] = true;
	if (u === d) {
		pathCount++;
	} else {
		while(adj[u].next !== null) {
			let n = adj[u].next;
			if (!visited[n]) {
				pathCount = countPathsUtil(n, d, visited, pathCount);
			}
			adj[u] = adj[u].next;
		}
	}
	visited[u] = false;
	return pathCount;
}
