/*

Topological sorting for a directed acyclic graph (dag) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. 

Topological sorting for a graph is not possible if the graph is not a dag.

Topological sorting is different from dfs. 
In dfs, we print a vertex and then recursively call dfs for its adjacent vertex. 
In topological sort, we need to print a vertex before its adjacent vertices. 

However, we can modify dfs to find topological sorting for a graph. 
In DFS, we start from a vertex, we print it, and then recursively call dfs for its adjacent vertices. 
In topological sorting, we use a temporary stack. We don't print the vertex immediately, 
instead we first recursively call topological sorting for all its adjacent vertices, 
then push it back to the stack. Lastly, we'll print the contents of the stack.

Note - a vertex is push to the stack only when all of its adjacent vertices (and their adjacent vertices) are already in the stack.

The time complexity is O(V + E).
This implementation is simply dfs with an extra stack.

*/

function topologicalSort(adj) {
	const stack = new Stack();
	const visited = Array(V);
	visited.fill(false);
	
	// topological sort for all vertices, one by one
	for (let i = 0; i < V; i++) {
		if (visited[i] == false) {
			topologicalSortUtil(adj, i, visited, stack);
		}
	}

	// print contents of stack
	while (!stack.isEmpty()) {
		console.log(stack.pop());
	}
}

function topologicalSortUtil(adj, v, visited, stack) {
	visited[v] = true;
	while(adj[v].next !== null) {
		let i = adj[v].next;
		if(!visited[i]) {
			topologicalSortUtil(adj, i, visisted, stack) 
		}
		adj[v] = adj[v].next;
	}
	stack.push(v);
}
