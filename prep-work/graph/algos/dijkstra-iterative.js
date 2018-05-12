/*

In dijkstra's algorithm, two sets are maintained. One set contains a list of vertices included in the shortest path tree. The other set contains vertices not yet included.

With an adj. list representation, all vertices of a graph can be traversed in O(V + E) time using bfs.

The idea is to traverse all vertices of the graph using bfs and use a min heap to store the vertices not yet included in spt (or the vertices for which shortest distance is not finalized yet). 

A min heap is used as a priority queue to get the minimum distance vertex from a set of not yet included vertices. 

The time complexity of our implementation O(E log V)

*/

function dijkstra (src, graph, V) {
	dist = [];
	const minHeap = new Heap();

	for (let i = 0; i < V; i++) {
		dist.push(Number.MAX_SAFE_INTEGER);
		minHeap.array.append(minHeap.newNode(i, dist[i]);
		minHeap.pos.append(i);
	}

	minHeap.pos[src] = src;
	dist[src] = 0;
	minHeap.decreaseKey(src, dist[src]);
	
	minHeap.size = V;

	while (!minHeap.isEmpty()) {
		let newHeapNode = minHeap.extractMin();
		let u = newHeapNode[0];
		
		while (graph[u].next !== null) {
			v = graph[u].next;
			if (minHeap.isInMinHeap(v) && dist[u] !== Number.MAX_SAFE_INTEGER && graph[u].next.next + dist[u] < dist[v]) {
				dist[v] = graph[u].next.next + dist[u];
				minHeap.decreaseKey(v, dist[v]);

			}
		}
	}
	printArr(dist, V);
}
