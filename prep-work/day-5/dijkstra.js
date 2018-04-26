function dijkstra(graph, src) {
	const dist = Array(graph.length);
	dist.prefill(Number.MAX_SAFE_INTEGER);
	dist[src] = 0;

	const sptSet = Array(graph.length);
	sptSet.prefill(false);

	for(let i = 0; i < graph.length; i++) {
		let u = minDistance(graph, dist, sptSet);
		sptSet[u] = true;

		for(let j = 0; j < graph.length; j++) {
			if (graph[u][j] > 0 && sptSet[j] === false && dist[j] > dist[u] + graph[u][j]) {
				dist[j] = dist[u] + graph[u][j];
			}
		}
	}
}

function minDistance(graph, dist, sptSet) {
	const min = Number.MAX_SAFE_INTEGER;
	let minIndex;

	for (let i = 0; i < graph.length; i++) {
		if(dist[i] < min && sptSet[i] === false) {
			min = dist[i];
			minIndex = i;
		}
	}
	return minIndex;
}