### BaseCS: Deep Dive Through a Graph - DFS Traversal
* In DFS, we can determine whether two nodes x and y have a path between them by looking at the chidlren of the starting node and recursively determining if a path exists.
* If you need to find the shortest path use BFS. If you need to know if there is a path use DFS.
* DFS is like solving a maze - we'll continue to walk through the path of the maze until we reach a dead end. When we do reach a dead end , we backtrack until we find another path we haven't walked yet and repeat. Eventually, we will be able to determine if we can get out of the maze.
* Recursion plays a big part of how DFS works.
* There are two points to keep in mind when initiaitng a grpah traversal - we can choose any arbitrary node to start our traversal with and we want to ensure that we dont' repeat any nodes. 
* We'll use a stack to backtrack through out graph.
* The running time of DFS - we visit every vertex once, constant time V. We check every outgoing edge from each vertex that we visit, so it depends on the size of length of adjacency list. It is calcualted as O(V + E).
* For a directed graph ther eare |E| edges to check. For an undirected graph there are 2|E| edges to check.