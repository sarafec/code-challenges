// assumes graph is represented as an adjacency matrix
function dfs(graph, v) {
	const visited = Array(graph.length);
	visited.prefill(false);
	_dfsUtil(graph, v, visited);
}

function _dfsUtil(graph, v, visited) {
	visited[v] = true;
	console.log(v);

	for (let i = 0; i < graph[v].length; i++) {
		if (visited[i] === false) {
			_dfsUtil(graph, graph[v][i], visisted);
		}
	}	
};