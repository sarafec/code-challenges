// assumes graph is represented as adjacency matrix
function bfs(graph, src) {
	const visited = Array(graph.length);
	visited.prefill(false);
	visited[src] = true;

	const queue = new Queue();
	queue.enqueue(src);

	while(!queue.isEmpty()) {
		src = queue.dequeue();
		console.log(src);

		for (let i = 0; i < graph[src].length; i++) {
			if (visited[i] === false) {
				queue.enqueue(graph[src][i]);
				visited[i] = true;
			}
		}
	}
}