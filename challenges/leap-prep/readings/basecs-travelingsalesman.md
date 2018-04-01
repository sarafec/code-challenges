#### BaseCS: The Trials And Tribulations Of The Traveling Salesman and Speeding Up The Traveling Salesman Using Dynamic Programming

* The traveling salesman problem - a salesman has to travle to ever single city in an area, visiting each city only once. He needs to end up in the same city where he starts his journey. What is the most efficient route for the salesman to take?
* A Eularian path through a graph is any path where every single edge is visited exactly once.
* A Eularian circuit is a Eularian path that is also a cycle. In other words, every edge is visited exactly once, and we end the path at the same place/vertex that we started.
* A Hamiltonian path through ag raph is one that passes through each vertex exactly once.
* A Hamiltonian circuit is actually jus ta Hamiltonian path, but it additionally a cycle. In other words, every vertex is visited exactly once, and we end at the same vertex where we began.
* In a Hamiltonian path, ever edge may not be visited. In a Eularian path, some vertices may be visited more than once.
* The traveling salesman problem is just a graph problem where the cities are vertices and the roads between them are the edges. The problem itself is to find a Hamiltonian circuit in the graph, taking into acount the weighted edges to find the shortest circuit.
* There are two things we ned to do for every node we visit - remember that we visited and keep track of nodes we can potentially visit next.
* Using an adjacency matrix to represent our graphs will allow us to see which nodes in our graphs contain edges bewteen them. We will tweak it so that it stores the weight of each edge as a value.
* The Held-Karp algorithm uses dynamic programming to reduce the runtime of TSP from O(n!) factorial to (2^n * n^2) exponential by enumerating through all sets of funciton calls.