/*

Breadth first traversal for a graph is similar to breadth first traversal of a tree. 
However, unlike trees, graphs may contain cycles, so we may come to the same node again. 
To avoid processing a node more than once, we use a boolean visited array. 

To simplify this implementation, we'll assume all vertices are reachable from the starting vertex.

This implementation uses an adjacency list representation.
It also assume V is the number of vertices in the graph, and it is defined elsewhere.
 
*/


function bfs (currVertex, adj) {
	const visited = Array(V);
	visited.fill(false);
	visited[currVertex] = true;
	
	const queue = new Queue();
	queue.enqueue(currVertex);

	while(!queue.isEmpty()) {
		currVertex = queue.dequeue();
		console.log(currVertex);

		while(adj[currVertex].next !== null) {
			let n = adj[currVertex].next;
			if(!visited[n]) {
				visisted[n] = true;
				queue.enqueue(n);
			}
		}
	}
}
