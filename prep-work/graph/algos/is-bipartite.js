/*

A bipartite graph is a graph whose vertices can be divided into two independent sets. In other words, for every edge (u,v), either u belongs to set U and v to V, or u belongs to V and v to U. 

a bipartite graph is possible if the graph coloring is possible using two colors, such that vertices in a set are colored with the same graph.

On a strongly connected graph, we can use backtracking to see if the graph is bipartite.

However, be aware that our implementation defines a graph of 0 to not be a bipartite, although it is.

*/

function isBipartite(graph, src) {
	const colorArr = Array(V);
	colorArr.fill(-1);
	colorArr[src] = 1;

	const queue = new Queue();
	queue.enqueue(src);
	
	while (!queue.isEmpty()) {
		let u = queue.dequeue();
		if (graph[u][u] === 1) {
			return false;
		}

		for (let v = 0; v < V; v++) {
			if (graph[u][v] && colorArr[v] == -1) {
				colorArr[v] = 1 - colorArr[u];
				queue.push(v);
			} else if (graph[u][v] && 
				colorArr[v] === colorArr[u]) {	
				return false;
			}
		}
	}
	return true;
}
