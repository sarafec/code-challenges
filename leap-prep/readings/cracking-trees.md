### Cracking the Coding Interview: Trees and Graphs
* A tree is a type of graph.
* A tree is a data structure composed of nodes. Each tree has a root node. The root node has zero or more child nodes. Each child has zero or more child nodes, and so on.
* A tree cannot contain cycles.
* The nodes of a tree may or may not be in a particular order, they could have any data types as values, and they may or may not have links back to their parent node.
* A binary tree is a tree in which each node has up to two children. Not all trees are binary trees.
* A leaf node is a node that has no children.
* A binary search tree is a binary tree in which every node fits a specific ordering property - all left descendents <= n < all right descendents. This must be true for each node n.
* In other words, a binary search tree imposes the condition that, for each node, its left descendents are less than or equal tot eh current node, which is less than the right descendents.
* Binary search tree definitions can vary slightly with respect to equality - under some definitions, the tree cannot have duplicate values. In others, the duplicate values will be on the right or can be on either side.
* A balanced tree means that the tree is just not terribly unbalanced. It's balanced enough to ensure O(log n) times for insert and find, but it's not necessarily as balanced as it could be.
* Two types of balanced trees - red-black trees and AVL trees.
* A complete binary tree is a binary tree in which every level of the tree is fully filled, except for perhaps the last level. To the extend that the last level is filled, it is filled left to right.
* A full binary tree is a binary tree in which every node has zero or two children. No nodes have only one child.
* A perfect binary tree is one that is both full and complete. All leaf nodes will be at the same level, and this level has the maximum number of nodes.
* A perfect tree msut have 2^k-1 nodes (where k is the number of levels).
* In-order traversal means to visit the left branch, then the current node, and finally, the right branch.
* Pre-order traversal means to visit the current node before its child nodes. In pre-order traversal, the root is always teh first node visited.
* Post-order traversal visits teh current ndoe after its child nodes. In post-order traversal, teh root is always the last node visited.
* A min-heap is a complete binary tree (totally filled other than the rightmost elements on the last level) where each node is smaller than its children. The root, therefore, is the minimum element in the tree.
* Two key methods on a min-heap - insert and extract_min
* Inserting into a min-heap - we start by inserting the element at the bottom. We insert at the rightmost spot so as to maintain the complete tree property. Then we "fix" the tree by swapping the new element with its parent, until we find an appropriate  spot for the element. We bubble up the minimum element. The running time is O(log n) time, where n is the number of nodes in the heap.
*  Extracting from a min-heap - finding the minimum element of a min-heap is easy because it is always at the top. To remove it, we remove the minimum element (the root) and swap it with the last element in the heap (the bottommost, rightmost element). Then, we bubble down this element, swapping it with one of its children until the min-heap property is restored. We will swap the smaller of the right and left child in order to maintain min-heap ordering. The running time is O(log n).
* A trie is a variant of an n-ary tree in which characters are stored at each node. Each path down the tree may represent a word.
* In a trie, the * nodes (sometimes called null nodes) are often used to indicate complete words. Alternatively, we could jsut use a boolean flag terminates within the "parent" node.
* A node in a trie could have anywhere from 1 through ALPHABET_SIZE + 1 children.
* Tries are freuqently used to store the entire (English) langauge for quick prefix lookups. While a hash table can quickly look up whether a string is a valid word, it cannot tell us if a string is a prefix of any valid words. A trie can do this very quickly.
* A trie can check if a string is a valid prefix in O(k) time, where K is the length of the string.
* Many problems involving lists of valid words leverage a trie as an optimization. In situations when we serach through th etree on related prefixes repeatedly, we might pass around a reference to the current node in the tree. 
* A tree is a connected graph without cycles.
* A graph is simply a collection of nodes with edges between some of them. Graphs can be either directed or undirected. Directed edges are like a one-way street and undirected edges are like a two-way street.
* The graph might consist of multiple isolated subgraphs. If there is a path between every pair of vertices, it is called a connected graph.
* The graph can also have cycles (or not). An "acyclic graph" is one without cycles.
* The most common way to represent a graph is in an adjacency list. In this form, every vertex (or node) stores a list of adjacent vertices. In an undirected graph, an edge like (a,b) would be stored twice - once in a's adjacent vertices and once in b's adjacent vertices.
* An array (or a hash table) of lists (arrays) can store the adjacent list.
* An adjacency matrix is an NxN boolean matrix (where N is the number of nodes), where a true value at matrix[i][j] indicates an edge from node i to node j.  You can also use an integer matri with 0s and 1s.
* In an undireicted graph, an adjacency matrix will be symmetric. In an directed graph, it will not necessarily be this way.
* The same grpah algorithms used on an adjacency list (i.e. BFS) can be performed with adjacency matrices, but they may be less efficient. 
* In the adjacency list representation, you can easily iterate through the neighbors of a node. IN the adjacency matrix representation, you will need to iterate through all the nodes to identify a node's neighbors.
* Common ways to search a graph - depth-first search and breadth-first search.
* In DFS, we start at the root (or another arbitrarily selected node) and explore each branch completely before moving onto the next branch. In order words, we go deep first before we go wide.
* In BFS, we start at the root (or another arbirarily selected node) and explore each neighbor before going on to any of their children. We go wide before we go deep.
* DFS is preferred if we want to visit every node in the graph. 
* BFS is preferred if we want to find the shortest path (or any path) between two nodes.
* In DFS, we visit a node a and then iterate through each of a's neighbors. When visiting a node b that is a neighbor of a, we visit all of b's neighbors before goign onto other neighbors. That is, a exhaustively searches b's branch before any of its neighbors.
* Pre-order and other forms of tree traveral are a form of DFS. The key difference is that when implementing this algorithm for a graph, we must check if the node has been visited. If we don't, we might get suck in an infinite loop.
* BFS is not recursive. It uses a queue. 
* In BFS, node a visits each of a's neighbors before visiting any of their neighbors. You can think of this as searching elvel by level our of a. An interative solution involving a queue usually works best.
* If you're asked to implement bread-first search, remember to use a queue.
* Bidirectional serach is used to find the shortest path between a source and destination node. It operates by esentially running two simultaneous bread-first searches, one from each node. When their searches collide, we have found a path.
* Example - If we had a graph where every node has at most k adjacent nodes and the shortest path from node s to t has a length of d. 
* Example, cont'd -  In BFS, we would search up to k nodes in the first level fo the search. In the second level, we would searhc up to k nodes for each of those  first k nodes, so k^2 nodes total. We would do this d times. With BFS we end up traversing O(k^d) nodes.
* Example, cont'd - In bidirectional serach, we have two seraches that collide after d/2 levels (the midpoint of the path). The search from s visits approx k^d/2, as does the search from t. That's approximately 2k^d/2 or O(k^d/2) nodes total.
* BFS vs. Bidirectional efficiency - if our system could only support seraching firend of friend paths in BFS search, we could likely support friend of friend of friend of friend paths. We'd be able to supprot paths that are twice as long. This is because O(k^d/2) * O(k^d/2) is O(k^d).

Chosen Questions:
* 4.2 Minimal Tree  
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary serach tree with minimal height.
* 4.3 List of Depths  
Given a binary tree, design an algorithm which creates a linked list of all teh nodes at each depth. That is to say, if you have a tree with depth d, you will have d linked lists.