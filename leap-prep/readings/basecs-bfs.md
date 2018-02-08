### BaseCS: Going Broad in a Graph - BFS Traversal
* The process of searching through or traversing through a graph data structure involves visiting each vertex/node in a graph. The order in which vertices are visited is how we can classify graph traversal.
* The only difference between traversing a graph by rbeadth or by depth is the order in which we visit the vertices in a graph.
* In DFS, we traverse deep into a structure by visiting children nodes before visiting sibling/neighbor nodes. We use a stack data structure.
* In BFS, we traverse broad into  astructure by visiting sibiling/neighbor nodes before children nodes. We use a queue data structure.
* Graph traversal can begin with any node, since there is no concept of root node.
* BFS can be broken down into these basic steps - add a node/vertex from the graph to a queueu of nodes to be "visited", visit the topmost node in the queue and mark it as such, if that nod ehas neighbors, check to see if they have been visited or not, add any neighboring nodes that still need to be "visited" to the queue, remove the node we've visited from the queue.
* BFS lends itself nicely to determining the shortest path between any node in the graph and the parent node. 
* Most BFS implementations keeptrack of every node's parent node that come before it. This is helpful because we can use the pointers of the path that we took to get to a node from teh starting point in order to determine the shortest path in the graph.
* The runtime complexity of BFS graph traversal is O(V + E).