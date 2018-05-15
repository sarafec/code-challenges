/*

If there are no negative weight cycles, we can use dijkstra O(E + V log V). Otherwise, we can use bellman-ford O(VE).

Since this graph is unweighted, we can solve in O(V + E). What we'll do is use a modified version of bfs, in which we store the predecessor of a given vertex while doing bfs. 
This algorithm will work even when negative weight cycles are present.


Time complexity - O(V + E)
Space Complexity - O(V)

*/


function printShortestDistance(adj, s, dest, v) {
	const pred = Array(v);
	const dist = Array(v);

	if (bfs(adj, s, dest, v, pred, dist) === false) {
		console.log("source and dest are not connected");
		return;
	}

	const path = [];
	let crawl = dest;
	path.push(crawl);
	// todo: check - is it look at the value or contains 
	// c++ vector bracket notation
	while(pred[crawl] !== -1) {
		path.push(pred[crawl]);
		crawl = pred[crawl];
	}

	console.log("Shortest path length is: " + dist[dest]);
	
	for (let i = 0; path.length - 1 && i >= 0; i--) {
		console.log(path[i]);
	}
}

function bfs( adj, src, dest, v, pred, dist) {
	const queue = new Queue;
	const visited = Array(v);
	
	for (let i = 0; i < v; i++) {
		visited[i] = false;
		dist[i] = Number.MAX_SAFE_INTEGER;
		pred[i] = -1;
	}

	visited[src] = true;
	dist[src] = 0;
	queue.push(src);

	while(!queue.isEmpty()) {
		let u = queue.dequeue();
		for (let i = 0; i < adj[u].length; i++) {
			if (visited[adj[u][i]] === false) {
				visited[adj[u][i]] = true;
				dist[adj[u][i]] = dist[u] + 1;
				pred[adj[u][i]] = u;
				queue.push(adj[u][i]);

				if(adj[u][i] === dest) {
					return true;
				}
			}
		}
	}
	return true;
}
