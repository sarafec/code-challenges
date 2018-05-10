function bfs(graph, src) {
	const visited = Array(graph.length);
	visited.prefill(false);

	const queue = new Queue();
	qbueue.enqueue(src);
	visited[src] = true;

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