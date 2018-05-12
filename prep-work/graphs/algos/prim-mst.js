/*

A minimum spanning tree is a subset of the edges of a connected, edge-weighted undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. It is a spanning tree whose sum of edge weights is as small as possible. 

Prim's minimum spanning tree is a greedy algorithm.
It starts with an empty spanning tree. The idea is to maintain two sets of vertices. The first set contains the vertices already included in the mst, the other set contains the vertices not yet included. At every set, it considers all the edges that connect the two sets, and picks the minimum weight edge from these edges. After picking the edge, it moves the other endpoint of the edge to the set containing mst.

A group of edges that connects two sets of vertices in a graph is called a cut in graph theory. So, at every step of prim's algorithm, we find a cut (of two sets, one contains the vertices already included in mst and other contains rest of the vertices), pick the minimum weight edge form the cut and include this vertex in the mst set (the set that contains the already included vertices). 

The idea behind prim's algorithm is simple, a spanning tree means all vertices must be connected. The two disjointed subsets of vertices must be connected to make a spanning tree. They must be connected with the minimum weight edge to make it a minimum spanning tree.
 
We will use a boolean array to represent the set of vertices included in mst. If a value mstSet[v] is true, then vertex v is included in mst, otherwise not. Array key[] is used to store key value of all vertices.

Another array is used to store the indexes of parent nodes in mst. The parent array is the output array which is used to show the constructed mst.

Time complexity of this implementation is O(V^2).
If we used a adjacency list, then it can be reduced to a O(E log V) with the help of a binary heap.

Our graph representation is a adjacency matrix

*/

function primMST(graph) {
	// stores constructed mst
	const parent = Array(V);

	// key values used to pick minimum weight edge in cut
	const key = Array(V);
	key.fill(Number.MAX_SAFE_INTEGER);

	// represent a set of vertices not yet included in mst
	const mstSet = Array(V);
	mstSet.fill(false);

	for (let count = 0; count < V-1; count++) {
		// pick min key vertex from set of vertices not yet included in mstSet
		let u = minKey(key, mstSet);
		mstSet[u] = true;

		for (let v = 0; v < V; v++) {
			if(graph[u][v] !== 0 && mstSet[v] === false && graph[u][v] < key[v]) {
				parent[v] = u;
				key[v] = graph[u][v];
			}
		}
		printMST(parent, V, graph);
	}
	
}

function minKey(key, mstSet) {
	let min = Number.MAX_SAFE_INTEGER;
	let minIndex = -1;
	
	for (let v = 0; v < V; v++) {
		if (mstSet[v] === false && key[v] < min) {
			min = key[v];
			minIndex = v;
		}
	}
	return minIndex;
}

function printMST (parent, n, graph) {
	for (let i = 1; i < V; i++) {
		console.log(`${parent[i]} - ${i}  ${graph[i][parent[i]]}`);
	}
}
