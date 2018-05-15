/*

Note that bfs and dfs won't work when picking the longest edge at each step. This is because a shorter edge can produce a longer path due ot higher weight edges.

Instead, we'll use backtracking. We will start with our given source, explore all paths from the current vertex. We will keep track of the current distance from the source. If the distance becomes more than k, we return true. If a path doesn't produce more than k distance, we back track.

In order to avoid ending up in a cycle, we will keep track of the current path vertices using an array. Whenever we add a vertex to a path, we will check if it already exists or not in the current path. If it exists, we will ignore the edge.

The time complexity of this implementation is O(n!)

*/

function pathMoreThanK(adj, src, k) {
	const path = Array(V);
	path.fill(false);

	path[src] = 1;
	return pathMoreThanKUtil(adj, src, k, path);
}

function pathMoreThanKUtil(adj, src, k, path) {
	if (k <= 0) return true;

	while (adj[src].next !== null) {
		let v = adj[src].first;
		let w = adj[src].second;

		if (path[v]) {
			continue;
		}

		if (w >= k) return true;
		path[v] = true;

		if (pathMoreThanKUtil(v, k - w, path)) {
			return true;
		}
		path[v] = false;
		adj[src] = adj[src].next;
	}
	return false;
}
