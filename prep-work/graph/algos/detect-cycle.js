/*

Use dfs to detect a cycle in a graph. dfs for a connected graph produces a tree. There is a cycle in a graph if there is a back edge present. A back edge is an edge that is from a node itself or one of its ancestor in the tree produced by dfs.

For a disconnected graph, we get the dfs forest as output. To detect a cycle, we can check the cycle in individual trees by checking back edges.

To detect a back edge, we can keep track of vertices currently in recursion stack of function for dfs traversal. If we reach a vertex that is already in the recursion stack, then there is a cycle in teh tree. 

The edge that connects current vertex to the vertex in the recursion stack is back edge. 

We have used use an array (recStack) to keep track of vertices in the recursion stack.

*/

function isCyclic() {
	const visited = Array(V);
	const recStack = Array(V);

	for (let i = 0; i < V; i++) {
		if (isCyclicUtil(i, visited, recStack)) {
			return true;
		}
	}
	return false;
}

function isCyclicUtil(i, visited, recStack) {
	if (recStack[i]) return true;
	if (visited[i]) return false;
	
	visited[i] = true;
	recStack[i] = true;
	
	// let's say our linked list method has a get method
	const child = adj[i];
	while (child.next !== null) {
		if (isCyclicUtil(child, visited, recStack)) {
			return true;
		}
	}
	recStack[i] = false;
	return false;
}
