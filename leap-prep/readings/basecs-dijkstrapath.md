#### BaseCS: Finding The Shortest Path, With A Little Help From Dijkstra
* A weighted graph is a graph whose edges have some value associated with tehm, which are also called weights.
* The weight of an edge usually represents the cost or distance bewteen two nodes. It can also represent the capacity that can be transported between two nodes.
* We can represent weight graphs in an adjaacency list.
* In a weighted graph's adjacency list representation, we add one adiditonal field to our elements in the linked list, which represents the collection of edges for each node in the graph. This field is called the cost of each edge and teh cost is where we store the weight of an edge.
* Dijkdstra's algorithm can be used to determine the shortest path from one node in a graph to every other node within the same graph data structure, provided that the nodes are reachable from the starting node.
* Dijkdstra's algorithm will run until all vertices in the graph have been visited. This means that the shortest path between any 2 nodes can be saved and looked up later.
* Rules for running Dijkstra's algorithm -   
1) From the starting node, visit the vertex with the smallest known distance/cost.  
2) Once we've moved to the smallest-cost vertex, check each of its neighboring nodes.  
3) Calculate the distance/cost for the neighboring nodes by summing the cost of the edges leading from the start vertex.  
4) If the distance/cost to a vertex we are checking is less than a known distance, update the shortest distance for that vertex.  
* We'll create a table to keep track of the shortest known distance to every vertex in our graph. In that table will be the vertex, the shortest difference from a starting point, and the previous vertex. 
* We'll also kep an array for visited vertices and unvisited vertices.
* Example of Dijkstra out in the wild is Google Maps.
* Dijkstra's algorithm is similar to BFS, spreading out wide rather than persuing one specific path deeply.