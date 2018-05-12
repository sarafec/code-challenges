/*

A spanning tree of a graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. 

A minimum spanning tree (mst) or minimum weight spanning or minimum weight spanning tree for a weighted, connected, and undirected graph is a spanning tree with weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.

A minimum spanning has V - 1 edges, where V is the number of vertices in the graph.

Using kruskal's algorithm, the steps to finding mst are to 1) sort the edges in non-decreasing order of their weight, 2) pick the smallest edge, check if it forms a cycle with the spanning tree formed so far. If a cycle is not formed, include this edge (or discard), repeat until there are V-1 edges in the spanning tree.

This algorithm is a greedy algorithm. The greedy choice is to pick the smallest weight edge that does not cause a cycle in the mst constructed so far. 

The running time is O(E log E + E log V). 
Sorting takes O(E log E) time. After sorting, we iterate through all the edges and apply findUnion algorithm. The find and union algorithms take at most O( log V). 

*/

function kurskalMST(graph) {
	const result = Array(V);
	let	e = 0,
		i = 0;
	// sort graph in non-decreasing order 
	// pretend this works
	graph.sort((a,b) => a - b);
	
	const parent = [];
	const rank = [];

	for (let i = 0; i < V; i++) {
		parent.push(graph[i]);
		rank.push(0);
	}

	while (e < V -1) {
		[u,v,w] = graph[i];
		i += 1;
		x = find(parent, u);
		y = find(parent, v);

		if (x !== y) {
			e += 1;
			result.push([u,v,w]);
			union(parent, rank, x, y);
		}
	}

	for (let i = 0; i < result.length; i++) {
		console.log(result[i].u, result[i].v, result[i].weight);
	}
}
