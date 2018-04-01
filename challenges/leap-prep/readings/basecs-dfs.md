### BaseCS: Demystifying Depth-First Search
* Travesing a tree means that you should walk through the tree without ever repeating ourselves.
* The order in which we visit nodes while traversing a tree is important. The order of traversal is how we classify the different traversal algorithms.
* There are two main choices in tree traversal - breadth-first search and depth-first serach.
* A node in a binary tree only has a reference to the node on its left and a reference to a node on its right.
* Wheever we search through the tree we are either trying to check or update all teh nodes in the structure.
* The steps for traversal are to reat the data of the node we're checking or updating. Check the node to the left of the node that we're currently on. Check the node to the right of the node we're currently on.
* There are threre types of search strategies - preorder, inorder and postorder.
* Pre order - for each node of the tree read the data of that node, then visit the left subtree and right subtree.
* In order - for each node, visit left subtree, then read the data of that node, then visit the right subtree.
* Post order - visit the left subtree, right subtree, and then visit and read the data of the node.
* We'll implement these traversal strategies using recursion.
* The time complexity of tree traversal is O(n) if we only visit nodes once.
* With this type of recursion, the stack will continue to grow until we reach a leaf, so the amoutn of memory we need to traverse (space complexity) is O(h), where h is the height of the tree.
* Examples of DFS - git biset or when implementing mazes. 

Further reading:
* [BFS vs DFS for Binary Tree](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
* [Application of Depth First Search](https://www.geeksforgeeks.org/applications-of-depth-first-search/)