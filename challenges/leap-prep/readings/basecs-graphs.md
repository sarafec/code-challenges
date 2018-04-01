### BaseCS: From Theory to Practice - Representing Graphs

* Graphs are nothing more than a way to formally represent a network, which is a collection of objects that are all interconnected.
* A graph is a data structure with two distinct parts - a finite set of vertices, which are also called nodes, and a finite set of edges, which are references/links/pointers from one vertex to another.
* The edges of a graph are reprsented as ordered or unordered depending on whether or not the graph is directed or undirected.
* The quiest way to turn a group of ordered pairs is to use an array (or list).
* However, using an array is not an efficient way to represent a graph. 
* Another option to represent a graph is an adjacency matrix. That is, a matrix that reprsents exactly which vertices/nodes in a graph have edges between them. The matrix serves as a lookup table, where a value of 1 represents an edge that exists and 0 represents an edge that does not.
* Problems with an adjacency matrix - they do have good insert/removal time for an edge O(1), but they can take up more space than encessary. An adjacency matrix always consumes O(v^2) amount of sapce. If a graph is sparse this may be unacceptable.
* Another option for representing a graph is an adjacency list. That is an array of linked lists that serves the purpose of representing a graph, but also makes it easy to see which other vertices are adjacent to other vertices. Each vertex in a graph can easily reference its neighbors through a linked list.

Further reading:
* [Graph and its representations](https://www.geeksforgeeks.org/graph-and-its-representations/)
* [Representing graphs](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs)