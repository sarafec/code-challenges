/*
Depth first search for a graph is similar to depth first traversal of a tree. However, unlike trees, graphs may contain cycles. We may come to the same node again. To avoid processing a node more than once, we will use a boolean visited array.

This implementation uses an adjacency representation for our graph.

*/

function dfs(v) {
	const visited = new Array(v);
	visited.fill(false);
	dfsUtil(v, visited);
}

function dfsUtil(v, visited) {
	visited[v] = true;
console.log(v);

while (adj[v].next !== null) {
	if (!visisted[adj[v]]) {
		dfsUtil(adj[v], visited);
	}
	adj[v] = adj[v].next;
}
}


/*
Our iterative implementation of dfs uses an explicit stack (instead of the call stack) to hold the visited vertices.
This is similar to bfs, but the important difference is that we'll use a stack instead of a queue.

Be aware, this implementation only prints vertices that are reachable from a given vertex. 

*/

function dfsIterative(currVertex) {
	const visited = new Array(V);
	visited.fill(false);
	
	const stack = new Stack();
	stack.push(currVertex);

	while(!stack.isEmpty()) {
		currVertex = stack.pop();
		// check out vertex hasn't been visited
		if (!visited.contains(currVertex)) {
			let vIndex = visited.indexOf(currVertex);
			console.log(currVertex);
			visited[vIndex] = true;
			
		}

		while(adj[v].next !== null) {
			let v = adj[v].next;
			if (!visited.contains(v)) {
				stack.push(v);
			}
			adj[v] = adj[v].next;
		}
	}
}
